import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function errorMessage(message: string) {
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
    icon: <CloseIcon sx={{ color: '#ff1744', fontSize: '2rem' }} />,
    className: 'failure',
  });
}

export function successMessage(message: string) {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
    icon: <CheckIcon sx={{ color: '#306edc', fontSize: '2rem' }} />,
    className: 'success',
  });
}

export function permissionMessage(message: string) {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
    icon: <CheckIcon sx={{ color: '#ffba5d', fontSize: '2rem' }} />,
    className: 'success',
  });
}
