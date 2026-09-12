import { BooleanInput, Create, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ChallengeOptionCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="text"
                    validate={[required()]}
                    label="Text"
                />
                <ReferenceInput
                    source="challengeId"
                    reference="challenges"
                />
                <BooleanInput
                    source="correct"
                    label="Correct option"
                />
                <TextInput
                    source="imageSrc"
                    label="Image source"
                />
                <TextInput
                    source="audioSrc"
                    label="Audio source"
                />
            </SimpleForm>
        </Create>
    )
}