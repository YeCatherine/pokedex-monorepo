[new-relic-interview](../README.md) / [Exports](../modules.md)
/ [core/controller/controller](../modules/core_controller_controller.md) /
default

# Class: default

[core/controller/controller](../modules/core_controller_controller.md).default

Class repsenting Controller part of MVC.

**`Param`**

**`Param`**

## Table of contents

### Constructors

- [constructor](core_controller_controller.default.md#constructor)

### Properties

- [model](core_controller_controller.default.md#model)
- [view](core_controller_controller.default.md#view)

### Methods

- [handleProgramClick](core_controller_controller.default.md#handleprogramclick)
- [handleViewChange](core_controller_controller.default.md#handleviewchange)
- [setupView](core_controller_controller.default.md#setupview)

## Constructors

### constructor

• **new default**(`model`, `view`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`default`](../interfaces/core_model_iModel.default.md) |
| `view` | [`ViewInterface`](../interfaces/core_view_view.ViewInterface.md) |

#### Defined in

core/controller/controller.ts:19

## Properties

### model

• `Private` **model**: [`default`](../interfaces/core_model_iModel.default.md)

#### Defined in

core/controller/controller.ts:15

___

### view

• `Private` **
view**: [`ViewInterface`](../interfaces/core_view_view.ViewInterface.md)

#### Defined in

core/controller/controller.ts:17

## Methods

### handleProgramClick

▸ **handleProgramClick**(`e`): `void`

Click handler for Program link.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`HTMLElementEvent`](../modules/types.md#htmlelementevent)<`HTMLButtonElement`\> |

#### Returns

`void`

#### Defined in

core/controller/controller.ts:76

___

### handleViewChange

▸ **handleViewChange**(): `void`

Handler for the view change checkbox that changes the Checkbox text.

#### Returns

`void`

#### Defined in

core/controller/controller.ts:60

___

### setupView

▸ **setupView**(): `Promise`<`void`\>

Setup the final project view. The implementation follows the task "Models the
described problem with a suitable class hierarchy".

#### Returns

`Promise`<`void`\>

#### Defined in

core/controller/controller.ts:29
