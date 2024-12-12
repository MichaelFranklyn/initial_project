export type UserProps = {
  id: string;
  email: string;
  company_id: string;
  name: string;
  job: string;
  routes: Routes[];
};

export type Routes = {
  info_company_route: {
    info_route: {
      id: string;
      parent_id?: string;
      path: string;
      leaf: boolean;
      order: number;
      text: string;
    };
  };
};
