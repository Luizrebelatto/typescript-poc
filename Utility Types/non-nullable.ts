// exclude null and undefined

type name = string | null | undefined;

type FormName = NonNullable<name>