# UsuarioControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUsuario**](#createusuario) | **POST** /usuario/crear | |
|[**deleteUsuario**](#deleteusuario) | **DELETE** /usuario/{id} | |
|[**getUsuarioByFechaRegistro**](#getusuariobyfecharegistro) | **GET** /usuario/fecharegistro/{fechaRegistro} | |
|[**getUsuarioById**](#getusuariobyid) | **GET** /usuario/{id} | |
|[**getUsuarioByNombre**](#getusuariobynombre) | **GET** /usuario/nombre/{nombre} | |
|[**getUsuarios**](#getusuarios) | **GET** /usuario/todos | |
|[**updateNombreUsuario**](#updatenombreusuario) | **PATCH** /usuario/{id}/updatenom | |

# **createUsuario**
> ResponseUsuario createUsuario(createUsuario)


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration,
    CreateUsuario
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

let createUsuario: CreateUsuario; //

const { status, data } = await apiInstance.createUsuario(
    createUsuario
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUsuario** | **CreateUsuario**|  | |


### Return type

**ResponseUsuario**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUsuario**
> string deleteUsuario()


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteUsuario(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsuarioByFechaRegistro**
> Array<ResponseUsuario> getUsuarioByFechaRegistro()


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

let fechaRegistro: string; // (default to undefined)

const { status, data } = await apiInstance.getUsuarioByFechaRegistro(
    fechaRegistro
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fechaRegistro** | [**string**] |  | defaults to undefined|


### Return type

**Array<ResponseUsuario>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsuarioById**
> ResponseUsuario getUsuarioById()


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getUsuarioById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ResponseUsuario**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsuarioByNombre**
> Array<ResponseUsuario> getUsuarioByNombre()


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

let nombre: string; // (default to undefined)

const { status, data } = await apiInstance.getUsuarioByNombre(
    nombre
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nombre** | [**string**] |  | defaults to undefined|


### Return type

**Array<ResponseUsuario>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsuarios**
> Array<ResponseUsuario> getUsuarios()


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

const { status, data } = await apiInstance.getUsuarios();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ResponseUsuario>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateNombreUsuario**
> ResponseUsuario updateNombreUsuario(updateUsuarioNombre)


### Example

```typescript
import {
    UsuarioControllerApi,
    Configuration,
    UpdateUsuarioNombre
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuarioControllerApi(configuration);

let id: number; // (default to undefined)
let updateUsuarioNombre: UpdateUsuarioNombre; //

const { status, data } = await apiInstance.updateNombreUsuario(
    id,
    updateUsuarioNombre
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUsuarioNombre** | **UpdateUsuarioNombre**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ResponseUsuario**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

