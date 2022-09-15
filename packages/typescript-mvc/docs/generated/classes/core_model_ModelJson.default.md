[new-relic-interview](../README.md) / [Exports](../modules.md) / [core/model/ModelJson](../modules/core_model_ModelJson.md) / default

# Class: default

[core/model/ModelJson](../modules/core_model_ModelJson.md).default

Json Model Implementation.

## Hierarchy

- [`default`](core_model_ModelBase.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](core_model_ModelJson.default.md#constructor)

### Properties

- [applications](core_model_ModelJson.default.md#applications)
- [data](core_model_ModelJson.default.md#data)

### Methods

- [addAppToHosts](core_model_ModelJson.default.md#addapptohosts)
- [fetchData](core_model_ModelJson.default.md#fetchdata)
- [getTopAppsByHost](core_model_ModelJson.default.md#gettopappsbyhost)
- [groupByHost](core_model_ModelJson.default.md#groupbyhost)
- [init](core_model_ModelJson.default.md#init)
- [prepareHosts](core_model_ModelJson.default.md#preparehosts)
- [removeAppFromHosts](core_model_ModelJson.default.md#removeappfromhosts)
- [groupByHostGeneral](core_model_ModelJson.default.md#groupbyhostgeneral)
- [prepareHostsGeneral](core_model_ModelJson.default.md#preparehostsgeneral)
- [sortHosts](core_model_ModelJson.default.md#sorthosts)

## Constructors

### constructor

• **new default**()

#### Inherited from

[default](core_model_ModelBase.default.md).[constructor](core_model_ModelBase.default.md#constructor)

## Properties

### applications

• **applications**: [`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Overrides

[default](core_model_ModelBase.default.md).[applications](core_model_ModelBase.default.md#applications)

#### Defined in

core/model/ModelJson.ts:11

___

### data

• **data**: [`HostAppDataType`](../modules/types.md#hostappdatatype)[]

#### Overrides

[default](core_model_ModelBase.default.md).[data](core_model_ModelBase.default.md#data)

#### Defined in

core/model/ModelJson.ts:13

## Methods

### addAppToHosts

▸ `Private` **addAppToHosts**(`insertApp`): `void`

Add App to hosts. This method is not used anywhere for now and was added
according to the task.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `insertApp` | [`HostAppDataType`](../modules/types.md#hostappdatatype) | Object with app data. |

#### Returns

`void`

#### Defined in

core/model/ModelJson.ts:72

___

### fetchData

▸ **fetchData**<`T`\>(`resourceUrl`): `Promise`<`T`\>

The universal method for fetching data.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceUrl` | `string` | the url |

#### Returns

`Promise`<`T`\>

#### Defined in

core/model/ModelJson.ts:29

___

### getTopAppsByHost

▸ **getTopAppsByHost**(`limit?`): `Promise`<`void`\>

According to the task the number of hosts should be 25,
but it conflicts with the UI (5 apps per card).
Extract data from json.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `limit` | `number` | `5` |

#### Returns

`Promise`<`void`\>

#### Overrides

[default](core_model_ModelBase.default.md).[getTopAppsByHost](core_model_ModelBase.default.md#gettopappsbyhost)

#### Defined in

core/model/ModelJson.ts:40

___

### groupByHost

▸ **groupByHost**(): [`HostGroupedType`](../modules/types.md#hostgroupedtype)

Group data by host. The usage of extra counting object allows
to reduce the complexity by not adding one more cycle in this case and
ends with O(n^2) complexity.

#### Returns

[`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Defined in

core/model/ModelJson.ts:51

___

### init

▸ **init**(): `Promise`<`void`\>

The initial method to fetch the data.

#### Returns

`Promise`<`void`\>

#### Overrides

[default](core_model_ModelBase.default.md).[init](core_model_ModelBase.default.md#init)

#### Defined in

core/model/ModelJson.ts:19

___

### prepareHosts

▸ **prepareHosts**(`hosts`, `limit`): [`HostGroupedType`](../modules/types.md#hostgroupedtype)

Prepare Hosts for cards in the UI by sorting by Apdex and limit. O(n^2)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hosts` | [`HostGroupedType`](../modules/types.md#hostgroupedtype) |
| `limit` | `number` |

#### Returns

[`HostGroupedType`](../modules/types.md#hostgroupedtype)

the 5 sorted hosts

#### Defined in

core/model/ModelJson.ts:63

___

### removeAppFromHosts

▸ `Private` **removeAppFromHosts**(`appName`): `void`

Filter array data. This method is not used anywhere for now
and was added according to the task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |

#### Returns

`void`

#### Defined in

core/model/ModelJson.ts:82

___

### groupByHostGeneral

▸ `Static` **groupByHostGeneral**(`data`): [`HostGroupedType`](../modules/types.md#hostgroupedtype)

Group by General Host.
The solution was implemented with the help of extra object to reduce the complexity.
O(n^2) complexity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`HostAppDataType`](../modules/types.md#hostappdatatype)[] |

#### Returns

[`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Inherited from

[default](core_model_ModelBase.default.md).[groupByHostGeneral](core_model_ModelBase.default.md#groupbyhostgeneral)

#### Defined in

core/model/ModelBase.ts:35

___

### prepareHostsGeneral

▸ `Static` **prepareHostsGeneral**(`data`, `hosts`, `limit?`): [`HostGroupedType`](../modules/types.md#hostgroupedtype)

Prepares the sorted amount of hosts for the cards.
According to the task the number of hosts should be 25,
but it conflicts with the UI (5 apps per card).
O(n^2) complexity.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`HostAppDataType`](../modules/types.md#hostappdatatype)[] | `undefined` |
| `hosts` | [`HostGroupedType`](../modules/types.md#hostgroupedtype) | `undefined` |
| `limit` | `number` | `5` |

#### Returns

[`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Inherited from

[default](core_model_ModelBase.default.md).[prepareHostsGeneral](core_model_ModelBase.default.md#preparehostsgeneral)

#### Defined in

core/model/ModelBase.ts:63

___

### sortHosts

▸ `Static` **sortHosts**(`a`, `b`): `number`

Simple sorting algorithm was moved to the function to test later.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`HostGroupedTypeItem`](../modules/types.md#hostgroupedtypeitem) | HostGroupedTypeItem |
| `b` | [`HostGroupedTypeItem`](../modules/types.md#hostgroupedtypeitem) | HostGroupedTypeItem |

#### Returns

`number`

#### Inherited from

[default](core_model_ModelBase.default.md).[sortHosts](core_model_ModelBase.default.md#sorthosts)

#### Defined in

core/model/ModelBase.ts:25
