[new-relic-interview](../README.md) / [Exports](../modules.md)
/ [core/view/view](../modules/core_view_view.md) / default

# Class: default

[core/view/view](../modules/core_view_view.md).default

## Implements

- [`ViewInterface`](../interfaces/core_view_view.ViewInterface.md)

## Table of contents

### Constructors

- [constructor](core_view_view.default.md#constructor)

### Properties

- [app](core_view_view.default.md#app)
- [applicationList](core_view_view.default.md#applicationlist)
- [checkboxLabel](core_view_view.default.md#checkboxlabel)
- [checkboxWrapper](core_view_view.default.md#checkboxwrapper)
- [header](core_view_view.default.md#header)
- [labelTextGrid](core_view_view.default.md#labeltextgrid)
- [labelTextList](core_view_view.default.md#labeltextlist)
- [title](core_view_view.default.md#title)

### Methods

- [bindProgramClick](core_view_view.default.md#bindprogramclick)
- [bindViewChange](core_view_view.default.md#bindviewchange)
- [cardTemplate](core_view_view.default.md#cardtemplate)
- [createElement](core_view_view.default.md#createelement)
- [displayList](core_view_view.default.md#displaylist)
- [listTemplate](core_view_view.default.md#listtemplate)

## Constructors

### constructor

• **new default**()

#### Defined in

core/view/view.ts:65

## Properties

### app

• **app**: `HTMLElement`

App Wrapper.

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[app](../interfaces/core_view_view.ViewInterface.md#app)

#### Defined in

core/view/view.ts:38

---

### applicationList

• **applicationList**: `HTMLElement`

Application List.

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[applicationList](../interfaces/core_view_view.ViewInterface.md#applicationlist)

#### Defined in

core/view/view.ts:63

---

### checkboxLabel

• **checkboxLabel**: `HTMLElement`

Checkbox Label Wrapper.

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[checkboxLabel](../interfaces/core_view_view.ViewInterface.md#checkboxlabel)

#### Defined in

core/view/view.ts:58

---

### checkboxWrapper

• **checkboxWrapper**: `HTMLElement`

Checkbox Wrapper.

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[checkboxWrapper](../interfaces/core_view_view.ViewInterface.md#checkboxwrapper)

#### Defined in

core/view/view.ts:53

---

### header

• **header**: `HTMLElement`

Header Element.

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[header](../interfaces/core_view_view.ViewInterface.md#header)

#### Defined in

core/view/view.ts:43

---

### labelTextGrid

• **labelTextGrid**: `string` = `'Show as an awesome grid'`

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[labelTextGrid](../interfaces/core_view_view.ViewInterface.md#labeltextgrid)

#### Defined in

core/view/view.ts:31

---

### labelTextList

• **labelTextList**: `string` = `'Show as list'`

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[labelTextList](../interfaces/core_view_view.ViewInterface.md#labeltextlist)

#### Defined in

core/view/view.ts:33

---

### title

• **title**: `HTMLElement`

Title Element.

#### Implementation of

[ViewInterface](../interfaces/core_view_view.ViewInterface.md)
.[title](../interfaces/core_view_view.ViewInterface.md#title)

#### Defined in

core/view/view.ts:48

## Methods

### bindProgramClick

▸ **bindProgramClick**(`handler`): `void`

#### Parameters

| Name      | Type                                                         |
| :-------- | :----------------------------------------------------------- |
| `handler` | [`ClickEventHandler`](../modules/types.md#clickeventhandler) |

#### Returns

`void`

#### Implementation of

ViewInterface.bindProgramClick

#### Defined in

core/view/view.ts:167

---

### bindViewChange

▸ **bindViewChange**(`handler`): `void`

#### Parameters

| Name      | Type                                                         |
| :-------- | :----------------------------------------------------------- |
| `handler` | [`ClickEventHandler`](../modules/types.md#clickeventhandler) |

#### Returns

`void`

#### Implementation of

ViewInterface.bindViewChange

#### Defined in

core/view/view.ts:160

---

### cardTemplate

▸ **cardTemplate**(`host`, `item`): `string`

Card template

#### Parameters

| Name   | Type                                                               |
| :----- | :----------------------------------------------------------------- |
| `host` | `string`                                                           |
| `item` | [`HostGroupedTypeItem`](../modules/types.md#hostgroupedtypeitem)[] |

#### Returns

`string`

#### Defined in

core/view/view.ts:136

---

### createElement

▸ **createElement**(`tag`, `className?`): `HTMLElement`

Create Dom element

#### Parameters

| Name        | Type     | Default value |
| :---------- | :------- | :------------ |
| `tag`       | `string` | `undefined`   |
| `className` | `string` | `''`          |

#### Returns

`HTMLElement`

#### Defined in

core/view/view.ts:102

---

### displayList

▸ **displayList**(`items`): `void`

Display list.

#### Parameters

| Name    | Type                                                     |
| :------ | :------------------------------------------------------- |
| `items` | [`HostGroupedType`](../modules/types.md#hostgroupedtype) |

#### Returns

`void`

#### Implementation of

ViewInterface.displayList

#### Defined in

core/view/view.ts:150

---

### listTemplate

▸ **listTemplate**(`links`): `string`

List template

#### Parameters

| Name    | Type                                                               | Description   |
| :------ | :----------------------------------------------------------------- | :------------ |
| `links` | [`HostGroupedTypeItem`](../modules/types.md#hostgroupedtypeitem)[] | list of apps. |

#### Returns

`string`

#### Defined in

core/view/view.ts:118
