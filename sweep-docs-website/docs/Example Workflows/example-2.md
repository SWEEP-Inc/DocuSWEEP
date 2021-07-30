#  Example 2: A workflow with a scattered task

### Workflow definition

```python

{
  "workflow_id": "example2",
  "config": {},
  "tasks": [
    {
      "id": "1",
      "execution_configurations" : [
        {
          "function_def_id" : "firstFunc",
          "priority" : 1
        }
      ],
      "successors": [
        "2"
      ],
      "properties": {
        "position": "start"
      }
    },
    {
      "id": "2",
      "execution_configurations" : [
        {
          "function_def_id" : "mutFunc",
          "priority" : 1
        }
      ],
      "successors": [
        "3"
      ],
      "properties": {
        "scatter": "predecessor_outputs['1']['tile']"
      }
    },
    {
      "id": "3",
      "execution_configurations" : [
        {
          "function_def_id" : "otherFunc",
          "priority" : 1
        }
      ],
      "successors": []
    }
  ]
}

```


If the function **firstFunc** generates the following output:

```python
{ "buckets": [{"count": 3}],
  "tile" : [{"tile_id" : 1}, {"tile_id" : 2},{"tile_id" : 3}]}
```


Then task **2** will be expanded to tasks **2_A**, **2_B**, **2_C**, each receiving the following input (where X = 0,1,2):

```python
{ "buckets": [{"count": 3}],
  "tile" : {"tile_id" : X}}
```


### DAG representation

Task **2** is a scatter task:
![Example 2A](/img/sweep/example_wd_DAG_dyn_A.png)

Upon completion of task **1**, task **2** is expanded into 3 tasks: **2_A**, **2_B** and **2_C**
![Example 2B](/img/sweep/example_wd_DAG_dyn_B.png)

