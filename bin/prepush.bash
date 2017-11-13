#!/usr/bin/env bash

# prepush
#
# makes sure that you don't push to master, develop, or rel-x.x.x
# --------

# default environment is development

NODE_ENV="${NODE_ENV:-development}"

code=0
os="$(uname)"
red="\e[0;31m"
green="\e[0;32m"
reset="\e[0m"

# check operating system

if [ "$os" == "Darwin" ]; then
    policy="${red}fatal: never push to the protected branches or force push!${reset}"
    prefix="refs/heads"
    current_branch="$(git symbolic-ref HEAD 2> /dev/null || git rev-parse --short HEAD 2> /dev/null)"
    protected_branches=(
        "master"
        "develop"
        "rel-^(\d+\.)?(\d+\.)?(\*|\d+)$"
    )
    push_cmd="$(ps -ocommand= -p $PPID)"
    destructive_push="force|delete|\-f"

    for branch in "${protected_branches[@]}"; do
        if [[ "$prefix/$branch" =~ $current_branch ]]; then
            echo -e "$policy"
            code=1
        elif [[ "$push_cmd" =~ $destructive_push ]]; then
            echo -e "$policy"
            code=1
        fi
    done

    if [[ "$code" == 0 ]]; then
        echo -e "${green}done: pushing $current_branch to remote${reset}"
    fi
elif [ "$os" == "Linux" ]; then
    echo -e "${red}fatal: operating system $os not supported${reset}"
    code=1
else
    echo -e "${red}fatal: operating system $os not supported${reset}"
    code=1
fi

exit "$code"
