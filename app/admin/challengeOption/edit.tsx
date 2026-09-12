import { BooleanInput, Edit, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput
                    source="id"
                    validate={[required()]}
                    label="ID"
                />
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
        </Edit>
    )
}