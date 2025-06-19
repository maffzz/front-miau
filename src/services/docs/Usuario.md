# Usuario


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**nombre** | **string** |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**fechaRegistro** | **string** |  | [optional] [default to undefined]
**gatitos** | [**Array&lt;Gatito&gt;**](Gatito.md) |  | [optional] [default to undefined]
**locked** | **boolean** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**credentialsExpired** | **boolean** |  | [optional] [default to undefined]
**expired** | **boolean** |  | [optional] [default to undefined]
**enable** | **boolean** |  | [optional] [default to undefined]
**credentialsNonExpired** | **boolean** |  | [optional] [default to undefined]
**authorities** | [**Array&lt;GrantedAuthority&gt;**](GrantedAuthority.md) |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**accountNonExpired** | **boolean** |  | [optional] [default to undefined]
**accountNonLocked** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Usuario } from './api';

const instance: Usuario = {
    id,
    nombre,
    role,
    email,
    password,
    fechaRegistro,
    gatitos,
    locked,
    enabled,
    credentialsExpired,
    expired,
    enable,
    credentialsNonExpired,
    authorities,
    username,
    accountNonExpired,
    accountNonLocked,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
