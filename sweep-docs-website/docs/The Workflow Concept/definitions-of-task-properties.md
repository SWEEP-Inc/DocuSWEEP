---
sidebar_position: 4
---
# Definitions of task properties

## Task properties
Task properties are static values that are associated with a task. This means that they do not change over time,
they are associated with a workflow (unlike task attributes described below, which are associated with a particular launch of the workflow).


* **position**: the position in the task graph. used to define the starting task.  
> There must be exactly one task with the property **'position' : 'start'**. This will be the first task that is executed, and all other tasks should be on a path from the start task in the DAG representation.

* **delay**: time in seconds that a task should wait before being launched. the delay begins when the task is otherwise ready to lauch, after all its predecessors have finished.

* **static_input**: input to the task that is independent of the launch, other tasks, etc.

* **multiplicity**: specifies a number of times a task should be replicated.

* **deploy_conditions**: list of conditions in the form of expressions depending on the output of this task predecessors that must be fulfilled in order for the task to be launched. if all predecessors have finished but any of the conditions is not true, the task fails.

* **scatter**: an expression that indicates which part of a predecessors output should be scattered over: this output is assumed to be of list-type, this task will be replicated for each element of this list, each new task replica receiving one element as input.

* **follow**: specifies a predecessor ID (P) whose replication factor this task (T) is to follow. A replica Ti of this task will gather all aggregatedd output of the corresponding replica Pi of the predecessor. See example below how scatter and follow can be used to define multi-level scatter and gather behaviour.

* **environment**: only valid for container-based tasks. specifies environment variables the image, overriding the one specified when building the image and the one in the container definition. one dictionary per environment variable, the dictionary must contains 2 items: 'name' and
'value'

* **command**: only valid for container-based tasks. specifies a command to run in the image, overriding the one specified when building the image and the one in the container definition.

* **static_output**: specifies a pre-determined item in the task's output. it will appear in the output-dictionary of a task with the key 'static_output', along with any other output that the actual task generates. **NOTE:** *unlike static_input, the *value* must not be determined before launch: static_output may be a str, in which case it is considered a dynamic property (see [Dynamic task properties](#dynamic-task-properties)), meaning it can e.g. specify a value in terms of the predecessor outputs.*

> Task Properties
```python
{
    'position' : str,
    'delay' : int,
    'static_input' : object,
    'multiplicity' : int
    'deploy_conditions' : expr list,
    'scatter' : expr,
    'follow' : str,
    'environment' : dict list | expr,
    'command' : str list,
    'static_output' : expr
}
```

> Environment Properties
```python
'environment' : [
                {'name': 'EVAR1', 'value': '1'},
                {'name': 'EVAR2', 'value': 'hello'}
              ]
```

## Dynamic task properties
Dynamic task properties are properties whose value is decided at runtime.

They are specified by strings of Python expressions, e.g. by referencing the output of a previous tasks using the output variable "predecessor_outputs" as shown in the examples below (see [Communication between tasks](../Communication%20Between%20Tasks/inputs.md).

#### The properties that must be dynamic are:
* **deploy_conditions**
* **scatter**

#### The properties that may be dynamic are:
* **environment**
* **static_output**

If the value of these properties is of type str then they are treated as dynamic.


>Example of **deploy_conditions** property with one dynamic condition:

```python
"deploy_conditions" : ["predecessor_outputs['1']['buckets'][0]['count'] >= 4"]
```


>Example of a dynamic **static_output** property:

```python
"static_output" : "predecessor_outputs['1']['env_vars']"
```
