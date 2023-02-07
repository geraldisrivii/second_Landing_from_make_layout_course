import os
import json
with open("paths.json") as programm_file:
    programm_data = json.load(programm_file)
    key = input(
        "Please input - p, if we wan't to say operation result, but not renaming files. Else press enter:\t")
    initial_names = sorted(os.listdir(programm_data["path_initial"]))
    new_names = sorted(os.listdir(programm_data["path_output"]))
    for index in range(len(initial_names)):
        if (key == "p"):
            index1 = initial_names[index].find(" ")
            if(not (index1 == -1)):
                index1 = 5
            else:
                print(programm_data["path_output"] + new_names[index], (programm_data["path_output"] + initial_names[index][:initial_names[index].find(".")] + programm_data["format_output"]).strip(), sep="\t")
        else:
            index1 = initial_names[index].find(" ")
            if(not (index1 == -1)):
                os.rename(programm_data["path_output"] + new_names[index], (programm_data["path_output"] + initial_names[index][:index1] +
                initial_names[index][index1 + 1:initial_names[index].find(".")] + programm_data["format_output"]))
            else:
                os.rename(programm_data["path_output"] + new_names[index], (programm_data["path_output"] + initial_names[index][:initial_names[index].find(".")] + programm_data["format_output"]))
