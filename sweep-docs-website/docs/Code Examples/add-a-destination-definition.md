# Add a destination definition

See [Creating destinations](../The%20Workflow%20Concept/creating-destinations.md) for information on what the destination definition should contain.

```python

    response = sweep_client.register_destination(dfile='../path/to/def_dest1.json', user = user)
    print(response)

    > {'status': 'OK', 'msg': 'Successfully registered destinaiton dest1.'}

```