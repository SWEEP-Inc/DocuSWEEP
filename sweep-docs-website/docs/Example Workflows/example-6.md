#  Example 6: A workflow with container overrides

A workflow with a single container-based task with command and environment variables defined in the workflow definition, overriding those in the docker image.

### Workflow definition

```python
{
  "workflow_id": "wf_overrides",
  "config": {},
  "tasks": [
    {
      "id": 1,
      "execution_configurations" : [
        {
          "container_def_id" : "cdef_hello_world",
          "priority" : 1
        }
      ],
      "successors": [],
      "properties": {
        "position": "start",
        "command": [
          "sh",
          "-c",
          "printenv USERNAME"
        ],
        "environment": [
          {
            "name": "USERNAME",
            "value": "ka"
          },
          {
            "name": "IND",
            "value": "1"
          }
        ]
      }
    }
  ]
}


```

The optional task properties **environment** and **command** are used to specify additional information for the container the task is run in.

when this workflow is launched, task 1 will be run in a container and SWEEP will:

* set the two environment variables USERNAME and IND (overwriting any other definition of these)

* override the run command to 'printenv USERNAME'
