// @ts-nocheck
import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import PreFillProject from "./ui/PreFillProject";
import AddViolationButton from "./ui/AddViolationButton";

export const Violations: CollectionConfig = {
  slug: 'Violations',
  labels: {
    singular: 'Violation',
    plural: 'Violations',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'addViolationButton',
      type: 'ui',
      admin: {
        components: {
          Field: PreFillProject,
        }
      }
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'project',
      label: 'project',
      type: 'relationship',
      relationTo: 'projects'
    },
  ]
}