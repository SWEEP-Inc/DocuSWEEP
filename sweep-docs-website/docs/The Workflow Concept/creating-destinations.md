---
sidebar_position: 5
---
# Creating destinations

A destination definition contains all the necessary information to execute a task on a cloud provider.

> Destination Definition
```python
  {
      'id' : str,
      'cloud_provider' : 'AWS' | 'Azure',
       ... the additional elements are cloud provider-dependent, see sections below ...
  }
```


Required:

* **id:** unique identifier of the destination

* **cloud_provider:** the cloud provider of this destination


### AWS destinations

```python
  {
      'id' : str,
      'cloud_provider' : 'AWS',
      'credentials' : {profile_name : str , aws_account_id : str}
      'aws_region' : str
      'aws_ecs_iam_role' : str
      'aws_fargate_cluster' : str
      'aws_cluster_vpc_subnet_1' : str
      'aws_cluster_vpc_subnet_2' : str
      'aws_lambda_iam_role' : str

  }
```

* **profile_name:** name of the AWS credentials profile to use.

* **aws_account_id:** id of AWS account to use

* **aws_region:** AWS region to use

* **aws_ecs_iam_role:** IAM role for ECS execution (containers)

* **aws_fargate_cluster:** name of a Fargate cluster to use

* **aws_cluster_vpc_subnet_1:** VPC subnet of the Fargate cluster

* **aws_cluster_vpc_subnet_2:** VPC subnet of the Fargate cluster

* **aws_lambda_iam_role:** IAM role for Lambda execution (functions)

### Azure destinations

```python
  {
      'id' : str,
      'cloud_provider' : 'Azure',
      'credentials' : {'azure_auth_file':str}
      'azure_region' : str
      'azure_resource_group' : str
      'azure_container_registry' : str
  }
```

* **azure_auth_file:** filename of a file containing Azure authentication info.

* **azure_region:** Azure region to use

* **azure_resource_group:** name of the resource group to use

* **azure_container_registry:** name of the container registry to use