---
sidebar_position: 3
---

# Definitions of Tasks

Tasks are defined by one or more **executables**, as well as additional orchestration information.

Functions and containers are the two types of executables supported by SWEEP.

* **id**: unique identifier

* **execution_configurations**: list of dicts that defines what **executables** this task can consist of, and their priority.

    for *function-based tasks*: **function_def_id** is given, it must correspond to the id of a **function definition** that has been registered in SWEEP. See [Creating function definitions](#creating-function-definitions).

    for *container-based tasks*: **container_def_id** is given, it must correspond to the id of a **container definition** that has been registered in SWEEP. See [Creating container definitions](#creating-container-definitions).

* **successors**: a list of tasks that should be invoked when the task finishes. this defines the DAG representing the workflow.

* **properties**: optional task properties dict

> Task Definition
```python
{
    'id' : str,
    'execution_configurations' : [
        {
        'function_def_id' | 'container_def_id' : str,
        'priority' : int
        }
    ]
    'successors' : str list,
    'properties' : dict
}
```