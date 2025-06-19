# GatitoControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGatito**](#creategatito) | **POST** /gatito/crear | |
|[**deleteGatito**](#deletegatito) | **DELETE** /gatito/{id} | |
|[**getByDuenioID**](#getbyduenioid) | **GET** /gatito/duenio/{id} | |
|[**getGatitoByAnioNacimiento**](#getgatitobyanionacimiento) | **GET** /gatito/anio/{anio} | |
|[**getGatitoByColor**](#getgatitobycolor) | **GET** /gatito/color/{color} | |
|[**getGatitoById**](#getgatitobyid) | **GET** /gatito/{id} | |
|[**getGatitoByNombre**](#getgatitobynombre) | **GET** /gatito/nombre/{nombre} | |
|[**getGatitos**](#getgatitos) | **GET** /gatito/todos | |
|[**updateGatitoDuenio**](#updategatitoduenio) | **PATCH** /gatito/{id}/updateduenio | |
|[**updateGatitoNombre**](#updategatitonombre) | **PATCH** /gatito/{id}/updatenom | |

# **createGatito**
> ResponseGatito createGatito(createGatito)


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration,
    CreateGatito
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let createGatito: CreateGatito; //

const { status, data } = await apiInstance.createGatito(
    createGatito
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGatito** | **CreateGatito**|  | |


### Return type

**ResponseGatito**

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

# **deleteGatito**
> string deleteGatito()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteGatito(
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

# **getByDuenioID**
> Array<ResponseGatito> getByDuenioID()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getByDuenioID(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Array<ResponseGatito>**

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

# **getGatitoByAnioNacimiento**
> Array<ResponseGatito> getGatitoByAnioNacimiento()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let anio: number; // (default to undefined)

const { status, data } = await apiInstance.getGatitoByAnioNacimiento(
    anio
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **anio** | [**number**] |  | defaults to undefined|


### Return type

**Array<ResponseGatito>**

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

# **getGatitoByColor**
> Array<ResponseGatito> getGatitoByColor()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let color: 'blanco' | 'negro' | 'marron' | 'gris' | 'naranja' | 'manchas'; // (default to undefined)

const { status, data } = await apiInstance.getGatitoByColor(
    color
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **color** | [**&#39;blanco&#39; | &#39;negro&#39; | &#39;marron&#39; | &#39;gris&#39; | &#39;naranja&#39; | &#39;manchas&#39;**]**Array<&#39;blanco&#39; &#124; &#39;negro&#39; &#124; &#39;marron&#39; &#124; &#39;gris&#39; &#124; &#39;naranja&#39; &#124; &#39;manchas&#39;>** |  | defaults to undefined|


### Return type

**Array<ResponseGatito>**

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

# **getGatitoById**
> ResponseGatito getGatitoById()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getGatitoById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ResponseGatito**

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

# **getGatitoByNombre**
> Array<ResponseGatito> getGatitoByNombre()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let nombre: string; // (default to undefined)

const { status, data } = await apiInstance.getGatitoByNombre(
    nombre
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nombre** | [**string**] |  | defaults to undefined|


### Return type

**Array<ResponseGatito>**

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

# **getGatitos**
> Array<ResponseGatito> getGatitos()


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

const { status, data } = await apiInstance.getGatitos();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ResponseGatito>**

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

# **updateGatitoDuenio**
> ResponseGatito updateGatitoDuenio(updateGatitoDuenio)


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration,
    UpdateGatitoDuenio
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let id: number; // (default to undefined)
let updateGatitoDuenio: UpdateGatitoDuenio; //

const { status, data } = await apiInstance.updateGatitoDuenio(
    id,
    updateGatitoDuenio
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGatitoDuenio** | **UpdateGatitoDuenio**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ResponseGatito**

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

# **updateGatitoNombre**
> ResponseGatito updateGatitoNombre(updateGatitoNombre)


### Example

```typescript
import {
    GatitoControllerApi,
    Configuration,
    UpdateGatitoNombre
} from './api';

const configuration = new Configuration();
const apiInstance = new GatitoControllerApi(configuration);

let id: number; // (default to undefined)
let updateGatitoNombre: UpdateGatitoNombre; //

const { status, data } = await apiInstance.updateGatitoNombre(
    id,
    updateGatitoNombre
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGatitoNombre** | **UpdateGatitoNombre**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ResponseGatito**

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

