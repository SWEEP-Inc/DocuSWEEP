# Example 3: A workflow with scatter and follow

### Workflow definition

```python

{
  "workflow_id": "example3",
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
          "function_def_id" : "multFunc",
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
      "successors": [],
      "properties": {
        "follow": "2"
      }
    }
  ]
}

```


If the function **firstFunc** generates the same output as the examle above, and task **2** is expanded in the same manner:

Then task **3** will be expanded to tasks **3_A**, **3_B**, **3_C**, each of which becomes a successor of one of the tasks expanded from task **2**:


### DAG representation

Task **2** is a scatter task:
![Example 3A](/img/sweep/example_wf_DAG_follow_A.png)
Upon expansion of task **2**, task **3** is expanded into 3 tasks: **3_A, 3_B** and **3_C**.
![Example 3B](/img/sweep/example_wf_DAG_follow_B.png)