---
sidebar_position: 7
---
# Creating container definitions


> A container definition contains three elements:
> 1. Where: A destination (cloud provider) where to run the container
> 2. What: A docker image that the container will be based on
> 3. How: Information for defining the container (memory, cpu, command to run)

Container tasks are placed in a workflow by specifying a **container_def_id** in the **execution_configurations** of the workflow definition. This must correspond to the id of a *container_definition* that has been registered in SWEEP:

> container definition

```python
  {
      'id' : str,
      'destination_id' : str,
      'image_name' : str,
      'image_tag' : str,
      'cpu' : float,
      'memory' : int,
      'command' : str list
  }
```


required:

* **id**: unique identifier of the container definition.

* **destination_id**: id of a destination, must be one that has already been registered in SWEEP. See [Creating destinations](creating-destinations.md).

* **image_name** and **image_tag**: define the image to base the container on.


optional:

*  **cpu_units**: number of CPU units allocated

*  **memory**: max memory allocated in MB

*  **command**: defines the command to run when starting the container, overriding the command specified in the docker image definition.

**Environment Variables**

Unlike in function definitions, environment variables are not set in the container definition. Instead, they are set in the task properties:

> Environment Properties
```python
'environment' : [
                {'name': 'EVAR1', 'value': '1'},
                {'name': 'EVAR2', 'value': 'hello'}
              ]
```

Refer to the [definitions of task properties](definitions-of-task-properties) page for additional details on how to define task properties for an executable.

> **Runtime resources of the container**

> CPU units and memory are allocated and charged for even if not fully utilized.

> Values must be valid for the specified CP. See https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-task-defs.html (Task CPU and Memory) for valid configurations for these values for Fargate.

> If not specified, default values (depending on CP) specified in the config file are used.


**NOTE:** the specified image and tag must exist in the local docker registry.

>   **trying to push another container definition with the same image_name and image_tag will**
>
>    * update the cpu, memory and command settings
>    * NOT overwrite the uploaded image (even if it has changed in the local docker repo) unless the optional argument --overwrite is given to sweep upload_container_def


The upload may take some time.