# Add a workflow definition


```python
    response = sweep_client.register_workflow(
        wffile='examples/hello_world_workflow/workflow_def_hello_world.json',
        user = user)

    print(response)
    > '{'workflow_id': 'wfdef_hello_world', 'status' : 'OK', 'msg' : 'Successfully created workflow wfdef_hello_world for user username.'}'
```