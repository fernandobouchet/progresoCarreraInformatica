import {
  Gamepad,
  LucideProps,
  Moon,
  SunMedium,
  Cpu,
  Menu,
  Laptop2,
  TerminalSquare,
  Server,
  Home,
  Award,
  GraduationCap,
  Star,
  User,
  Settings,
  LogOut,
  Users,
  BookCopy,
  Calendar,
  ShieldAlert,
  UserCog,
  ClipboardCopy,
  FileEdit,
  MoreHorizontal,
} from 'lucide-react';

export const Icons = {
  admin: ShieldAlert,
  award: Award,
  books: BookCopy,
  computer: Laptop2,
  copy: ClipboardCopy,
  cpu: Cpu,
  fileEdit: FileEdit,
  gamepad: Gamepad,
  graduation: GraduationCap,
  logout: LogOut,
  home: Home,
  menu: Menu,
  moon: Moon,
  more: MoreHorizontal,
  periods: Calendar,
  settings: Settings,
  server: Server,
  star: Star,
  terminal: TerminalSquare,
  sun: SunMedium,
  user: User,
  userSettings: UserCog,
  users: Users,
  google: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  line: (props: LucideProps) => (
    <svg
      aria-hidden="true"
      fill="none"
      width={152}
      height={9}
      className="text-primary"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      ></path>
    </svg>
  ),
};
