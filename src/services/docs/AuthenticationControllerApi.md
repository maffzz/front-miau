# AuthenticationControllerApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**login**](#login) | **POST** /auth/login | |
|[**register**](#register) | **POST** /auth/register | |

# **login**
> AuthResponse login(authRequest)


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration,
    AuthRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

let authRequest: AuthRequest; //

const { status, data } = await apiInstance.login(
    authRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authRequest** | **AuthRequest**|  | |


### Return type

**AuthResponse**

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

# **register**
> AuthResponse register(usuario)


### Example

```typescript
import {
    AuthenticationControllerApi,
    Configuration,
    Usuario
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationControllerApi(configuration);

let usuario: Usuario; //

const { status, data } = await apiInstance.register(
    usuario
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usuario** | **Usuario**|  | |


### Return type

**AuthResponse**

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

