#  Example 4: A more complicated workflow with follow

### workflow definition
see  [examples/example4/example4.json](examples/example4/example4.json)

```python
{
  "workflow_id": "example4",
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
        "2",
        "3"
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
        "4"
      ],
      "properties": {
        "scatter": "predecessor_outputs['1']['tile']"
      }
    },
    {
      "id": "3",
      "execution_configurations" : [
        {
          "function_def_id" : "lambda_func2",
          "priority" : 1
        }
      ],
      "successors": [
        "4"
      ]
    },
    {
      "id": "4",
      "execution_configurations" : [
        {
          "function_def_id" : "multFunc",
          "priority" : 1
        }
      ],
      "successors": [
        "5"
      ],
      "properties": {
        "follow": "2"
      }
    },
    {
      "id": "5",
      "execution_configurations" : [
        {
          "function_def_id" : "lambda_func2",
          "priority" : 1
        }
      ],
      "successors": []
    }
  ]
}

```


If the function **firstFunc** generates the same output as the examle above, and task **2** is expanded in the same manner:

Then task **4** will be expanded to tasks **4_A**, **4_B**, **4_C**, each of which becomes a successor of one of the tasks expanded from task **2**:


### DAG representation
![Example 4A](/img/sweep/example_wf_DAG_follow2_A.png)
When task **1** completes, task **2** can be expanded. In addition, task **4** can also immediately be expanded (without waiting for all task **2** instances to complete) since its multiplicity depends on the multiplicity of task **2**, which has already been decided.
![Example 4B](/img/sweep/example_wf_DAG_follow2_B.png)