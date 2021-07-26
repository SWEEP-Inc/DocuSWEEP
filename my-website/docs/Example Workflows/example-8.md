
# Example 8: A dynamic workflow with static output

Container-based tasks do not output any values to the workflow scheduler, but one way to propagate information through the workflow via container-based tasks is to use **static_output** property:

An example based on the previous one, but with a 3rd task that gets information from task 2:

### workflow definition

see [examples/example8/wf_def_static_output.json](examples/example8/wf_def_static_output.json)

```python

{
  "workflow_id": "wf_static_output",
  "config": {},
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
      "successors": [
        3
      ],
      "properties": {
        "scatter": "predecessor_outputs['1']['env_vars']",
        "command": [
          "sh",
          "-c",
          "printenv IND"
        ],
        "environment": "predecessor_outputs['1']['env_vars']",
        "static_output": "predecessor_outputs['1']['env_vars']"
      }
    },
    {
      "id": 3,
      "execution_configurations": [
        {
          "container_def_id": "cdef_hello_world",
          "priority": 1
        }
      ],
      "successors": [
        4
      ],
      "properties": {
        "follow": 2,
        "command": [
          "sh",
          "-c",
          "printenv IND"
        ],
        "environment": "predecessor_outputs['2']['static_output']",
        "static_output": "predecessor_outputs['2']['static_output']"
      }
    },
    {
      "id": 4,
      "execution_configurations": [
        {
          "container_def_id": "cdef_hello_world",
          "priority": 1
        }
      ],
      "successors": [],
      "properties": {
        "follow": 2,
        "command": [
          "sh",
          "-c",
          "printenv IND"
        ],
        "environment": "predecessor_outputs['3']['static_output']"
      }
    }
  ]
}


```


### DAG representation

The DAG of the completed workflow with the evaluated "environment" values annotated:

![Example 7](/img/sweep/example8.png)

Tasks 2_A, 2_B, 2_C were run in separate containers with different values for environment variable IND.