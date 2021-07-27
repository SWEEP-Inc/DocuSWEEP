---
sidebar_position: 2
---

# Outputs

The output of a task is made available to its succesors in the variable **predecessor_outputs**. The contents of this dict depend on the workflow definition, as well as the task executable.

* If a task has the **static_output** property set, this value will be stored in **predecessor_outputs**.

* If the executable of the task has a return value, the contents of this are also be stored in **predecessor_outputs**.


Only function-based tasks have return values. The only requirement of the return value is that it is a dict.

See
[lamba_function_template.py](./assets/lambda_function_template.py)
for an example of a function with a valid return value.

Containers do not have return values.



Container-based tasks behave just like function-based tasks in a workflow, except:

1. They do not receive input (not from predecessors, not static input).
2. They do not output anything to their successors.
3. Their status is defined by their exit code. This is the exit code of the docker container,
   which is the exit code of the command run inside the container. Exit code 0 means success.