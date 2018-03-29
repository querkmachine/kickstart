#!/bin/bash

# A script to make new Fractal components and their files

##### Constants

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
FRACTAL_PATH=$DIR/fractal/components
SASS_PATH=$DIR/src/scss

##### Parameters

COMPONENT_TYPE=$1
COMPONENT_NAME=$2

##### Do things

COMPONENT_PATH="$FRACTAL_PATH/$COMPONENT_TYPE/$COMPONENT_NAME"
mkdir $COMPONENT_PATH
touch "$COMPONENT_PATH/$COMPONENT_NAME.html"
touch "$COMPONENT_PATH/$COMPONENT_NAME.config.yml"
touch "$COMPONENT_PATH/readme.md"

touch "$SASS_PATH/$COMPONENT_TYPE/_$COMPONENT_NAME.scss"