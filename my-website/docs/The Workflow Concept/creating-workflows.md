---
sidebar_position: 1
---

# Creating workflows  

* **workflow_id**: unique identifier of the workflow  

* **tasks**: list of task definition dicts, each representing a task  

* **config**: optional workflow configuration dict, contains directives for workflow orchestration

> Workflow Definition
```python
{
    'workflow_id' : str,
    'config' : dict,
    'tasks' : list
}
```