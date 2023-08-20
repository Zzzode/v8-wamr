cmake_minimum_required(VERSION 3.15)

# Name of the project (will be the name of the plugin)
project (v8-wamr)

set(CMAKE_CXX_STANDARD 17)

# Don't add this line if you will try_compile with boost.
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(PROJ_DIR ${CMAKE_CURRENT_SOURCE_DIR})
set(SOURCE_DIR ${PROJ_DIR}/src)
set(DEPS_DIR ${PROJ_DIR}/deps)

set(NODE_API_DIR ${DEPS_DIR}/node)
set(NODE_ADDON_API_DIR ${DEPS_DIR}/node-addon-api)

include_directories(${NODE_ADDON_API_DIR} ${NODE_API_DIR})

add_definitions(-DNAPI_VERSION=7)

add_subdirectory(${PROJ_DIR}/src)
add_subdirectory(${PROJ_DIR}/samples)