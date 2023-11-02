import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import AddViolationButton from "./ui/AddViolationButton";

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels:{
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'name',
  },
  // access: {
  //   // Only admins can create
  //   create: isAdmin,
  //   // Only admins or editors with site access can read
  //   read: isAdminOrHasSiteAccess('id'),
  //   // Only admins can update
  //   update: isAdmin,
  //   // Only admins can delete
  //   delete: isAdmin,
  // },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'addViolationButton',
      type: 'ui',
      admin: {
        components: {
          Field: AddViolationButton,
        }
      }
    }
  ]
}