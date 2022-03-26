import { ActionWrapper, Name, packer, Table } from "as-chain"

// Contract
export const allow = Name.fromString("allow")

// Tables
export const allowglobals = Name.fromString("allowglobals")
export const allowedactor = Name.fromString("allowedactor")
export const allowedtoken = Name.fromString("allowedtoken")

// Actions
export const setglobals = new ActionWrapper(Name.fromString("setglobals"))
export const setactor = new ActionWrapper(Name.fromString("setactor"))
export const settoken = new ActionWrapper(Name.fromString("settoken"))

// Include
@packer
class allow_constants extends Table { constructor() { super(); } }