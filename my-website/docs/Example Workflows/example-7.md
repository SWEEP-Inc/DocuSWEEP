#  Example 7: A workflow with dynamic container overrides

The task properties **environment** and **command** can also be specified as strings, in which case they must be valid expression that can be evaluated using eval()

This can be used to e.g. let the outputs of the previous task determine the values:

An example where a function-based task outputs information about how many container tasks should be launched, and what their environment variables should be:




### Workflow definition

```python

{
  "workflow_id": "wf_overrides_dynamic",
  "providers": [],
  "tasks": [
    {
      "id": "1",
      "execution_configurations": [
        {
          "function_def_id": "prepFunc",
          "priority": 1
        }
      ],
      "successors": [
        2
      ],
      "properties": {
        "position": "start"
      }
    },
    {
      "id": 2,
      "execution_configurations": [
        {
          "container_def_id": "cdef_hello_world",
          "priority": 1
        }
      ],
      "successors": [],
      "properties": {
        "scatter": "predecessor_outputs['1']['env_vars']",
        "command": [
          "sh",
          "-c",
          "printenv IND"
        ],
        "environment": "predecessor_outputs['1']['env_vars']"
      }
    }
  ]
}


```


> In this case, the output of the function prepFunc is scattered over.
> "predecessor_outputs['1']['env_vars']" will contain a list with one item for each subsequent task.

The definition of the lambda function **prepFunc** is [examples/example7/main.py](examples/example7/main.py)

```python

import json

def handler(event, context):
        print("Received event: " + json.dumps(event, indent=2))

        	response = {"num_inds": 3,
				"env_vars" : [
					[{"name": "IND", "value": "1"}, {"name": "VAR", "value": "hello"}],
					[{"name": "IND", "value": "2"}, {"name": "VAR", "value": "hello"}],
					[{"name": "IND", "value": "3"}, {"name": "VAR", "value": "hello"}]
				]
				}
        return response


```


### DAG representation

![Example 7](/img/sweep/example7.png)