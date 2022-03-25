#!/usr/bin/env python3
import logging
import os

from pls.args.parser import parser
from pls.config import icons, prefs, specs
from pls.config.files import find_configs
from pls.data.utils import internal_yml_path
from pls.globals import args, state
from pls.log.config import configure_log_level


logger = logging.getLogger(__name__)


def init(argv=None):
    """
    Initialise module variables.

    :param argv: the argument vector to parse, use ``None`` to read ``sys.argv``
    """

    configure_log_level()

    logger.info("Parsing CLI arguments")
    cli_prefs = parser.parse_args(argv)
    logger.debug(f"CLI arguments: {cli_prefs}")

    args.args.directory = cli_prefs.directory

    state.state = state_obj = state.State()

    state_obj.setup_home()
    state_obj.setup_user_groups()
    state_obj.setup_git(cli_prefs.directory)

    conf_files = find_configs(cli_prefs.directory)
    logger.debug(f"Config files read: {conf_files}")

    logger.info("Reading config files")
    prefs.prefs = prefs.get_prefs(
        [
            *conf_files,
            internal_yml_path("prefs.yml"),
        ]
    )
    logger.debug(f"Config preferences: {prefs.prefs}")

    args.args.update(prefs.prefs)
    args.args.update(cli_prefs)

    logger.info("Reading icons")
    icons.nerd_icons, icons.emoji_icons = icons.get_icons(
        [
            *conf_files,
            internal_yml_path("nerd_icons.yml"),
            internal_yml_path("emoji_icons.yml"),
        ]
    )
    logger.debug(f"Nerd icons count: {len(icons.nerd_icons)}")
    logger.debug(f"Emoji icons count: {len(icons.emoji_icons)}")

    logger.info("Reading node specs")
    specs.node_specs = specs.get_specs(
        [
            *conf_files,
            internal_yml_path("node_specs.yml"),
        ]
    )
    logger.debug(f"Node specs count: {len(specs.node_specs)}")

    from pls.globals import console

    console.console = console.get_console()


def main() -> None:
    """
    Represents the starting point of the application. This function:

    - accepts no inputs: options are read from CLI arguments using ``argparse``
    - returns no outputs: output is written to ``STDOUT`` using ``rich``
    """

    init(None)  # ``None`` makes ``argparse`` read real CLI args from ``sys.argv``

    from pls.fs.list import read_input
    from pls.output.table import write_output

    node_map, node_list = read_input()

    if not node_list:
        return

    for node in node_list:
        node.match_specs(specs.node_specs)
        if args.args.collapse:
            node.find_main(node_map)
    if args.args.collapse:
        for node in node_list:
            if node.is_sub:
                continue
            node.set_sub_pre_shapes()

    write_output(node_list)


def dev() -> None:
    os.environ.setdefault("PLS_LOG_LEVEL", "DEBUG")  # Show detailed logs

    main()
