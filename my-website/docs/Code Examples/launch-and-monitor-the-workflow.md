# Launch and monitor the workflow

```python
    response = sweep_client.launch_workflow(
        wid='wfdef_hello_world',
        user=user)
    lid = response['launch_id']


    response = sweep_client.launch_status(wid='wfdef_hello_world', lid=lid, user=user)
    print(response)
```