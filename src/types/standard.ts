import { FetchProfile } from "./generated";

export type Profile = FetchProfile["profiles"]["items"][number]

export type FieldType = 'name' | 'bio' | 'email' | 'phoneNumber'

export type FieldDefinition = {
    readableName: string
    lensKey: string
}