---
sidebar_position: 6
---

# Creating Function Definitions

Functions are currently only supported for the AWS cloud provider.

> A function definition contains three elements:
> 1. Where: A destination (cloud provider) where to run the function
> 2. What: A function to run
> 3. How: Information for defining the function (memory, runtime, etc.)

Function-based tasks are placed in a workflow by specifying a **function_def_id** in the **execution_configurations** of the workflow definition. This must correspond to the id of a *function_definition* that has been registered in SWEEP:

> function definition

```python
  {
      'id' : str,
      'destination_id' : str,
      'function_name' : str,

      'environment_variables' : dict
      'description' : str
      'memory' : int
      'runtime' : 'nodejs'|'nodejs4.3'|'nodejs6.10'|'nodejs8.10'|'nodejs10.x'|'nodejs12.x'|'java8'|'java8.al2'|'java11'|'python2.7'|'python3.6'|'python3.7'|'python3.8'|'dotnetcore1.0'|'dotnetcore2.0'|'dotnetcore2.1'|'dotnetcore3.1'|'nodejs4.3-edge'|'go1.x'|'ruby2.5'|'ruby2.7'|'provided'|'provided.al2',
  }
```



required:

* **id**: unique identifier of the function definition.

* **destination_id**: id of a destination, must be one that has already been registered in SWEEP. See [Creating destinations](#creating-destinations).

* **function_name**: the name of the function


optional:

* **environment_variables:** environment variables, e.g. {'EVAR1' : 'test'}

* **description:** string describing the function

* **memory:** the amount of memory that your function has access to, in MB. increasing the function's memory also increases its CPU allocation. the default value is 128 MB. the value must be a multiple of 64 MB

* **runtime:** the function runtime. default is python3.6
'nodejs'|'nodejs4.3'|'nodejs6.10'|'nodejs8.10'|'nodejs10.x'|'nodejs12.x'|'java8'|'java8.al2'|'java11'|'python2.7'|'python3.6'|'python3.7'|'python3.8'|'dotnetcore1.0'|'dotnetcore2.0'|'dotnetcore2.1'|'dotnetcore3.1'|'nodejs4.3-edge'|'go1.x'|'ruby2.5'|'ruby2.7'|'provided'|'provided.al2',


> Note that the *function_definition* does not contain information about the actual code of the function. This is only specified when uploading the function to SWEEP, after that the function is referred to using its *function_name*.