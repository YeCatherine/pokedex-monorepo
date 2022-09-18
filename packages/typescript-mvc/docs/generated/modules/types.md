[new-relic-interview](../README.md) / [Exports](../modules.md) / types

# Module: types

## Table of contents

### Type Aliases

- [ClickEventHandler](types.md#clickeventhandler)
- [HTMLElementEvent](types.md#htmlelementevent)
- [HostAppDataType](types.md#hostappdatatype)
- [HostGroupedType](types.md#hostgroupedtype)
- [HostGroupedTypeItem](types.md#hostgroupedtypeitem)

## Type Aliases

### ClickEventHandler

Ƭ **ClickEventHandler**: (`e`: `MouseEvent`) => {}

#### Type declaration

▸ (`e`): `Object`

Declaration of CLickEvent.

##### Parameters

| Name | Type         |
| :--- | :----------- |
| `e`  | `MouseEvent` |

##### Returns

`Object`

#### Defined in

types/index.tsx:28

---

### HTMLElementEvent

Ƭ **HTMLElementEvent**<`T`\>: `Event` & { `target`: `T` }

Element click event.

#### Type parameters

| Name | Type                  |
| :--- | :-------------------- |
| `T`  | extends `HTMLElement` |

#### Defined in

types/index.tsx:21

---

### HostAppDataType

Ƭ **HostAppDataType**: `Object`

Declaration of Host Add Data item.

#### Type declaration

| Name           | Type       |
| :------------- | :--------- |
| `apdex`        | `number`   |
| `contributors` | `string`[] |
| `host`         | `string`[] |
| `name`         | `string`   |
| `version`      | `number`   |

#### Defined in

types/index.tsx:10

---

### HostGroupedType

Ƭ **HostGroupedType**: `Object`

Declaration of the final prepared hosts array.

#### Index signature

▪ [host: `string`]: [`HostGroupedTypeItem`](types.md#hostgroupedtypeitem)[]

#### Defined in

types/index.tsx:43

---

### HostGroupedTypeItem

Ƭ **HostGroupedTypeItem**: `Object`

Declaration of Host Grouped Type Item.

#### Type declaration

| Name      | Type     |
| :-------- | :------- |
| `apdex`   | `number` |
| `app_key` | `number` |
| `name`    | `string` |
| `version` | `number` |

#### Defined in

types/index.tsx:33
