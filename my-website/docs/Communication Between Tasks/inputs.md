---
sidebar_position: 1
---
# Inputs

Workflow tasks get input of the following structure:

> task input

```python
{
    'predecessor_outputs' : dict,
    'static_input' : dict
}
```

* **predecessor_outputs** contains outputs from every predecessor of the task. For every predecessor id x, the dictionary has an entry
      x : {output of task x}.

* **static_input** is the dict specified as this task's **static_input**-property in the workflow definition. Empty dict if no such property was specified.

The task input can be referenced in the workflow definition in dynamic task properties, e.g. an expression that specifies how a task should scatter based on the output of a predecessor.

The task input can not always be accessed in the executable code of the task, however. This depends on whether it is a function-based or container-based task, as described below.


### Input to function-based tasks

Function-based tasks receive the task input as a function argument, and it can therefore be accessed in the function code itself.

See [examples/lambda_function_template.py](examples/lambda_function_template.py) for an example of a function that accesses the output from its predecessors.



### Input to container-based tasks

Containers do not receive arguments, and the task input is therefore not directly available for the code that is executing in the container.

There are two ways through which information can be passed into containers:
1. the command to run when the container is launched
2. the environment variables of the container


Both of these can be set
* when creating the docker image
* in the SWEEP container definition **This overrides the ones specified when building the docker image**
* in the SWEEP workflow definition **This overrides both of the above**


### Example task input of a task with two predecessors:

```python
{
  'predecessor_outputs': {
    '1': {
      'msg': 'I completed successfully'
    },
    '2': {
      'buckets': 10,
      'static_output': 5
    }
  },
  'static_input': {}
}
```