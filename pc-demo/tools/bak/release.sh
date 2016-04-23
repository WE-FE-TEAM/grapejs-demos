#!/bin/sh

#         Readme
# 暂用, 代替grape release 指定的子系统(module)  sh deploy.sh -m home
#


# 准备初始化环境
Prepare(){
    cwd=`dirname $(pwd)/${0}`
    deployAppDir="${cwd}/../dist/app/"
    sourceDir=${cwd}
    osName=`uname`
}

Build(){
    moduleName=$1
    moduleDir="${sourceDir}/${moduleName}"
    indexFile="${sourceDir}/index.js"

    cp ${indexFile} ${deployAppDir}
    grape release -r ${moduleName} -cw
}

#命令行参数分析
while getopts "m:" arg
do
    case $arg in
        m)
            buildModules=$OPTARG #指定编译的子系统
            ;;
        ?)  #当有不认识的选项的时候arg为?
            echo -e ${RED} "参数错误" ${NC}
    exit 1
    ;;
    esac
done

Prepare

Build ${buildModules}

#grape release -r home -cw
