import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/shared/api/queryClient";

const QueryProvider = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider;