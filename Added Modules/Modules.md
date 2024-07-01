# Modules Section of the Project
In AzerothCore, modules are a way to extend and customize the functionality of the game server without modifying the core codebase. Here's an explanation of what modules do in AzerothCore:

- Extensibility: Modules allow developers to add new features, content, or modifications to the game server without altering the main codebase.
- Modularity: Each module is self-contained, making it easier to manage, update, or remove specific features without affecting other parts of the server.
- Custom Content: Modules can add new quests, items, NPCs, commands, or game mechanics that aren't part of the standard World of Warcraft experience.
- Server Customization: They allow server administrators to tailor their server's features and content to their specific community or gameplay vision.
- Easy Integration: AzerothCore's module system provides hooks and APIs that allow modules to interact with core server functions seamlessly.
- Community Contributions: The module system encourages the community to create and share their own server modifications, enhancing the overall ecosystem.
- Maintenance: Updates to the core can be made without necessarily breaking custom content implemented through modules.
- Performance Optimization: Modules can be enabled or disabled as needed, potentially improving server performance by running only necessary features.
- Scripting: Many modules use scripts to define behavior for NPCs, quests, or events, allowing for complex custom content creation.
- Configuration: Modules often come with their own configuration files, allowing server administrators to fine-tune their behavior without coding knowledge.

# CREATE A NEW AZEROTHCORE MODULE

1) [Read this page first](http://www.azerothcore.org/wiki/Create-a-Module)


2) Run the script `create_module.sh`:
- If you're on windows, execute it with Git Bash (right click on it and choose Git bash) if you have installed Git extensions
- If you're on linux, just run it with bash or with ./create_module.sh

This script will create the base of your module, with a clean history and add a git configuration option to this repository only (local config).


NOTE: You can also clone our skeleton-module manually, clean the history, and configure but you should use the script instead https://github.com/azerothcore/skeleton-module/


3) Share it with the community!

Join us on our discord, share it there, then we might fork it officially and it will appear in the module catalogue.

Note: For Advanced CMake implementations a <ModuleName>.cmake file in your module folder will be included in the config of Modules if it exists. See: ./CMakeList.txt around line #290
