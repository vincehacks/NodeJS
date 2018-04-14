/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 3 - A Simple Command Line App
 * 
 * In this lab, we’re going to make a simple command line app that listens to
 * file updates on a given file. Every time the file is edited, it should
 * display “The file has changed”
 * 
 * Your mission: Create a file notify-updates.js that can be run as follows:
 * node notify-updates.js sample-file.txt where sample-file.txt is a parameter
 * and could be any file name.
 * 
 * Hint: In order to listen to file system changes, use the following
 * documentation:
 * https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener
 *****************************************************************************/