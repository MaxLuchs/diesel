initSidebarItems({"fn":[["convert_absolute_path_to_relative",""],["create_config_file",""],["create_migrations_dir","Checks if the migration directory exists, else creates it. For more information see the `migrations_dir` function."],["create_migrations_directory","Looks for a migrations directory in the current path and all parent paths, and creates one in the same directory as the Cargo.toml if it can't find one. It also sticks a .gitkeep in the directory so git will pick it up. Returns a `DatabaseError::ProjectRootNotFound` if no Cargo.toml is found."],["find_project_root",""],["generate_bash_completion_command",""],["generate_completions_command",""],["generate_sql_migration",""],["handle_error",""],["main",""],["migration_version",""],["migrations_dir","Checks for a migrations folder in the following order : 1. From the CLI arguments 2. From the MIGRATION_DIRECTORY environment variable 3. From `diesel.toml` in the `migrations_directory` section"],["migrations_dir_from_cli",""],["redo_latest_migration","Reverts the most recent migration, and then runs it again, all in a transaction. If either part fails, the transaction is not committed."],["regenerate_schema_if_file_specified",""],["run_database_command",""],["run_infer_schema",""],["run_migration_command",""],["run_setup_command",""],["search_for_directory_containing_file","Searches for the directory that holds the project's Cargo.toml, and returns the path if it found it, or returns a `DatabaseError::ProjectRootNotFound`."],["should_redo_migration_in_transaction",""]],"mod":[["cli",""],["config",""],["database",""],["database_error",""],["infer_schema_internals",""],["print_schema",""],["query_helper",""]]});