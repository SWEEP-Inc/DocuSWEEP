# Creating executables

### Add a function definition

#### Step 1: Write the function and compress it


```shell
    cd examples/hello_world_function
    zip -g hello_world.zip main.py
```



#### Step 2: Upload the function definition to SWEEP

```python

    response = sweep_client.upload_function_def(
	    function_def_file='examples/hello_world_function/fdef_hello_world.json',
	    function_code_file='examples/hello_world_function/hello_world.zip',
	    user = user)

    > {'status': 'OK', 'msg': 'Successfully uploaded function hello_world.'}

```


### Add a container definition

#### Step 1: Create a docker image and compress it

[hello_world.zip](./assets/hello_world.zip) contains files for creating a simple docker image that prints 'hello world'.

This script
```console
cd hello_world
docker build --tag hello_world .
docker run hello_world; echo $?
docker save -o hello_world.tar hello_world:latest
```
contains commands
to build the image, run it locally and display its exit code, and compress it to a tar archive.
Please save this script as **docker_cmds_hello_world.sh** and run

    $ ./docker_cmds_hello_world.sh

    > Sending build context to Docker daemon  3.072kB
        .
        .
        .
    > Successfully built 832c75e88988
    > Successfully tagged hello_world:latest
    > Hello world!
    > 0


#### Step 2: Upload the container definition to SWEEP

A container definition for the hello world image is:
```json
{
  "id" : "cdef_hello_world",
  "destination_id" : "dest1",
  "image_name": "hello_world",
  "image_tag": "latest",
  "cpu" : "0.25",
  "memory" : "512"
}
```
Please save this JSON as **_container_def_hello_world.json**.

Use the SWEEP-API to upload the container definition:

```python
    container_def_file = 'examples/hello_world_container/_container_def_hello_world.json'
    response = sweep_client.upload_container_def(
    	container_def_file='examples/hello_world_container/cdef_hello_world.json',
    	container_code_file='examples/hello_world_container/hello_world.tar',
	    user = user)

    print(response)
    > {'status': 'OK', 'msg': 'Started uploading image.'}
```

**Make sure the images you push are such that they return the exit code 0 if they run successfully**
This is standard behaviour, but you can check the exit code of a container locally by running
your image and printing the environment variable ?, which contains the exit code of the latest run command.

    docker run my_image; echo $?