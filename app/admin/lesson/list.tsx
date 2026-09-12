import { Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";

export const LessonList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id" />
                <TextField source="title" />
                <NumberField source="order" />
                <ReferenceField
                    source="unitId"
                    reference="units"
                />
            </Datagrid>
        </List>
    )
}