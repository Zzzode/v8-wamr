# Declare the location of the source files
file(GLOB SOURCE_FILES add.cc add.h)

# This line will tell CMake that we're building a shared library
# from the above source files named after the project's name
add_library(add SHARED ${SOURCE_FILES})

# This line will give our library file a .node extension without any "lib" prefix
set_target_properties(add PROPERTIES PREFIX "" SUFFIX ".node")
