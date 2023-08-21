# Declare the location of the source files
file(GLOB SOURCE_FILES *.cc *.h)

# This line will tell CMake that we're building a shared library
# from the above source files named after the project's name
add_library(addon SHARED ${SOURCE_FILES})

# 1. This line will give our library file a .node extension without any "lib" prefix
# 2. Set the output directory for the shared library
# 3. Set linker flags to ignore undefined symbols
set_target_properties(addon PROPERTIES
  LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/libs
  LINK_FLAGS "-undefined dynamic_lookup"
  PREFIX ""
  SUFFIX ".node"
)
