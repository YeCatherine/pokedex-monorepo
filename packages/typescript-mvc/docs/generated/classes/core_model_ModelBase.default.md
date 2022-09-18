[new-relic-interview](../README.md) / [Exports](../modules.md)
/ [core/model/ModelBase](../modules/core_model_ModelBase.md) / default

# Class: default

[core/model/ModelBase](../modules/core_model_ModelBase.md).default

General Model implementation. Contains reusable functions.

## Hierarchy

- **`default`**

  ↳ [`default`](core_model_ModelJson.default.md)

## Implements

- [`default`](../interfaces/core_model_iModel.default.md)

## Table of contents

### Constructors

- [constructor](core_model_ModelBase.default.md#constructor)

### Properties

- [applications](core_model_ModelBase.default.md#applications)
- [data](core_model_ModelBase.default.md#data)

### Methods

- [getTopAppsByHost](core_model_ModelBase.default.md#gettopappsbyhost)
- [init](core_model_ModelBase.default.md#init)
- [groupByHostGeneral](core_model_ModelBase.default.md#groupbyhostgeneral)
- [prepareHostsGeneral](core_model_ModelBase.default.md#preparehostsgeneral)
- [sortHosts](core_model_ModelBase.default.md#sorthosts)

## Constructors

### constructor

• **new default**()

## Properties

### applications

• **applications**: [`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Implementation of

[default](../interfaces/core_model_iModel.default.md)
.[applications](../interfaces/core_model_iModel.default.md#applications)

#### Defined in

core/model/ModelBase.ts:14

---

### data

• **data**: [`HostAppDataType`](../modules/types.md#hostappdatatype)[]

#### Implementation of

[default](../interfaces/core_model_iModel.default.md)
.[data](../interfaces/core_model_iModel.default.md#data)

#### Defined in

core/model/ModelBase.ts:16

## Methods

### getTopAppsByHost

▸ **getTopAppsByHost**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

iModel.getTopAppsByHost

#### Defined in

core/model/ModelBase.ts:93

---

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

iModel.init

#### Defined in

core/model/ModelBase.ts:90

---

### groupByHostGeneral

▸ `Static` **
groupByHostGeneral**(`data`): [`HostGroupedType`](../modules/types.md#hostgroupedtype)

Group by General Host. The solution was implemented with the help of extra
object to reduce the complexity. O(n^2) complexity.

#### Parameters

| Name   | Type                                                       |
| :----- | :--------------------------------------------------------- |
| `data` | [`HostAppDataType`](../modules/types.md#hostappdatatype)[] |

#### Returns

[`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Defined in

core/model/ModelBase.ts:35

---

### prepareHostsGeneral

▸ `Static` **prepareHostsGeneral**(`data`, `hosts`
, `limit?`): [`HostGroupedType`](../modules/types.md#hostgroupedtype)

Prepares the sorted amount of hosts for the cards. According to the task the
number of hosts should be 25, but it conflicts with the UI (5 apps per card). O(
n^2) complexity.

#### Parameters

| Name    | Type                                                       | Default value |
| :------ | :--------------------------------------------------------- | :------------ |
| `data`  | [`HostAppDataType`](../modules/types.md#hostappdatatype)[] | `undefined`   |
| `hosts` | [`HostGroupedType`](../modules/types.md#hostgroupedtype)   | `undefined`   |
| `limit` | `number`                                                   | `5`           |

#### Returns

[`HostGroupedType`](../modules/types.md#hostgroupedtype)

#### Defined in

core/model/ModelBase.ts:63

---

### sortHosts

▸ `Static` **sortHosts**(`a`, `b`): `number`

Simple sorting algorithm was moved to the function to test later.

#### Parameters

| Name | Type                                                             | Description         |
| :--- | :--------------------------------------------------------------- | :------------------ |
| `a`  | [`HostGroupedTypeItem`](../modules/types.md#hostgroupedtypeitem) | HostGroupedTypeItem |
| `b`  | [`HostGroupedTypeItem`](../modules/types.md#hostgroupedtypeitem) | HostGroupedTypeItem |

#### Returns

`number`

#### Defined in

core/model/ModelBase.ts:25
