import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as CLSX from 'clsx';
import { ClassValue as ClassValue$1 } from 'clsx';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { DayPicker, DateRange } from 'react-day-picker';
import * as recharts_types_util_payload_getUniqPayload from 'recharts/types/util/payload/getUniqPayload';
import * as recharts_types_component_Tooltip from 'recharts/types/component/Tooltip';
import * as recharts_types_util_types from 'recharts/types/util/types';
import * as recharts_types_component_DefaultTooltipContent from 'recharts/types/component/DefaultTooltipContent';
import * as RechartsPrimitive from 'recharts';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps as DialogProps$2 } from '@radix-ui/react-dialog';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { IconProps, Icon } from '@iconify/react';
import * as input_otp from 'input-otp';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { Toaster as Toaster$2 } from 'sonner';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { ColumnDef, PaginationState, OnChangeFn, SortingState, RowSelectionState, Column, Table as Table$1 } from '@tanstack/react-table';
import * as ResizablePrimitive from 'react-resizable-panels';

declare const Accordion: React$1.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React$1.RefAttributes<HTMLDivElement>, "ref">) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type ClassValue = CLSX.ClassValue;
type ClassProp = {
    class: ClassValue;
    className?: never;
} | {
    class?: never;
    className: ClassValue;
} | {
    class?: never;
    className?: never;
};
type OmitUndefined<T> = T extends undefined ? never : T;
type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;
type ConfigSchema = Record<string, Record<string, ClassValue>>;
type ConfigVariants<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
type ConfigVariantsMulti<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined;
};
type Config<T> = T extends ConfigSchema ? {
    variants?: T;
    defaultVariants?: ConfigVariants<T>;
    compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp : ClassProp)[];
} : never;
type Props<T> = T extends ConfigSchema ? ConfigVariants<T> & ClassProp : ClassProp;
declare const cva: <T>(base?: ClassValue, config?: Config<T>) => (props?: Props<T>) => string;

type Color = "default" | "dark" | "light" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light" | undefined;

declare const buttonVariants: (props?: ({
    variant?: "link" | "fill" | "default" | "icon" | "secondary" | "success" | "info" | "warning" | "outline" | "glass" | "ghost" | "destructive" | null | undefined;
    color?: "default" | "dark" | "light" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light" | null | undefined;
    size?: "default" | "icon" | "xs" | "sm" | "lg" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & ClassProp) | undefined) => string;
interface ButtonProps extends Omit<React$1.ButtonHTMLAttributes<HTMLButtonElement>, "color">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    color?: Color;
    tooltip?: React$1.ReactNode;
    children?: React$1.ReactNode;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: {
    ({ ...props }: AlertDialogPrimitive.AlertDialogPortalProps): React$1.JSX.Element;
    displayName: string | undefined;
};
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    size?: "default" | "sm";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const AlertDialogMedia: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & Pick<ButtonProps, "color" | "size" | "variant"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & Pick<ButtonProps, "color" | "size" | "variant"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string;
declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "warning-light" | "danger-light" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertAction: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const AspectRatio: React$1.ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & React$1.RefAttributes<HTMLDivElement>>;

declare function AttachmentGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const attachmentVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
declare function Attachment({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof attachmentVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare const attachmentMediaVariants: (props?: ({
    variant?: "default" | "icon" | "lg" | "preview" | null | undefined;
} & ClassProp) | undefined) => string;
declare function AttachmentMedia({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>): React$1.JSX.Element;
declare function AttachmentContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AttachmentTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AttachmentDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AttachmentActions({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AttachmentAction({ className, asChild, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function AttachmentTrigger({ className, asChild, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: "default" | "sm" | "lg";
} & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare function AvatarBadge({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function AvatarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "link" | "fill" | "default" | "secondary" | "success" | "info" | "warning" | "outline" | "ghost" | "destructive" | null | undefined;
    color?: "default" | "dark" | "light" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light" | null | undefined;
} & ClassProp) | undefined) => string;
interface BadgeCustom extends React$1.HTMLAttributes<HTMLSpanElement> {
}
interface BadgeProps extends Omit<BadgeCustom, "color">, VariantProps<typeof badgeVariants> {
    color?: Color;
    asChild?: boolean;
}
declare const Badge: React$1.ForwardRefExoticComponent<BadgeProps & React$1.RefAttributes<HTMLSpanElement>>;

declare function BubbleGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const bubbleVariants: (props?: ({
    align?: "end" | "start" | null | undefined;
} & ClassProp) | undefined) => string;
declare function Bubble({ className, align, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof bubbleVariants>): React$1.JSX.Element;
declare const bubbleContentVariants: (props?: ({
    variant?: "default" | "primary" | "outline" | "ghost" | null | undefined;
    shape?: "end" | "start" | "default" | "middle" | null | undefined;
} & ClassProp) | undefined) => string;
declare function BubbleContent({ className, variant, shape, asChild, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof bubbleContentVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare const bubbleReactionsVariants: (props?: ({
    align?: "end" | "start" | null | undefined;
} & ClassProp) | undefined) => string;
declare function BubbleReactions({ className, align, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof bubbleReactionsVariants>): React$1.JSX.Element;

interface BulkActionsBarProps {
    selectedCount: number;
    onClear: () => void;
    children: React$1.ReactNode;
    selectedLabel?: (count: number) => string;
    className?: string;
}
declare function BulkActionsBar({ selectedCount, onClear, children, selectedLabel, className, }: BulkActionsBarProps): React$1.JSX.Element | null;

declare const generateArray: (start: number, end: number, step: number) => number[];

declare const cn: (...inputs: ClassValue$1[]) => string;

declare function useForwardedRef<T>(ref: React__default.ForwardedRef<T>): React__default.RefObject<T>;

declare function useMediaQuery(query: string): boolean;

declare const useDebounce: (fn: () => void, waitTime: number, deps?: React__default.DependencyList) => void;

declare const useDelay: (fn: () => void, delayTime: number, deps?: React__default.DependencyList) => void;

declare const useRepeat: (fn: () => void, interval: number, deps?: React__default.DependencyList) => void;

declare const colorVariants: (props?: ({
    color?: "default" | "dark" | "light" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light" | null | undefined;
} & ClassProp) | undefined) => string;

declare function useIsMobile(): boolean;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const buttonGroupVariants: (props?: ({
    orientation?: "vertical" | "horizontal" | null | undefined;
} & ClassProp) | undefined) => string;
type ButtonGroupProps = React$1.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>;
declare const ButtonGroup: React$1.ForwardRefExoticComponent<Omit<ButtonGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare function ButtonGroupText({ className, asChild, ...props }: React$1.ComponentProps<"div"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;

declare const Breadcrumb: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
    displayName: string;
};

type CalendarProps = React$1.ComponentProps<typeof DayPicker>;
declare const Calendar: {
    ({ className, classNames, showOutsideDays, ...props }: CalendarProps): React$1.JSX.Element;
    displayName: string;
};

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React$1.ReactNode;
        icon?: React$1.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare const ChartContainer: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React$1.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare const ChartTooltipContent: React$1.ForwardRefExoticComponent<Omit<RechartsPrimitive.DefaultTooltipContentProps<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType> & {
    accessibilityLayer?: boolean;
    active?: boolean | undefined;
    includeHidden?: boolean | undefined;
    allowEscapeViewBox?: recharts_types_util_types.AllowInDimension;
    animationDuration?: recharts_types_util_types.AnimationDuration;
    animationEasing?: recharts_types_util_types.AnimationTiming;
    content?: recharts_types_component_Tooltip.ContentType<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType> | undefined;
    coordinate?: Partial<recharts_types_util_types.Coordinate>;
    cursor?: boolean | React$1.ReactElement | React$1.SVGProps<SVGElement>;
    filterNull?: boolean;
    defaultIndex?: number;
    isAnimationActive?: boolean;
    offset?: number;
    payloadUniqBy?: recharts_types_util_payload_getUniqPayload.UniqueOption<recharts_types_component_DefaultTooltipContent.Payload<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType>> | undefined;
    position?: Partial<recharts_types_util_types.Coordinate>;
    reverseDirection?: recharts_types_util_types.AllowInDimension;
    shared?: boolean;
    trigger?: "hover" | "click";
    useTranslate3d?: boolean;
    viewBox?: recharts_types_util_types.CartesianViewBox;
    wrapperStyle?: React$1.CSSProperties;
} & React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare const ChartLegendContent: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    size?: "default" | "sm";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardAction: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin | any[];
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;
declare function useCarousel(): CarouselContextProps;
declare const Carousel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & CarouselProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
interface CarouselPreviousProps extends React$1.ComponentProps<typeof Button> {
    position?: "static" | "absolute" | "relative" | "fixed" | "sticky";
}
declare const CarouselPrevious: React$1.ForwardRefExoticComponent<Omit<CarouselPreviousProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
interface CarouselNextProps extends React$1.ComponentProps<typeof Button> {
    position?: "static" | "absolute" | "relative" | "fixed" | "sticky";
}
declare const CarouselNext: React$1.ForwardRefExoticComponent<Omit<CarouselNextProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
type CarouselControlProps = {
    className?: string;
    children: React$1.ReactNode;
};
declare const CarouselControl: React$1.ForwardRefExoticComponent<CarouselControlProps & React$1.RefAttributes<HTMLDivElement>>;
type CarouselButtonProps = {
    className?: string;
    children: React$1.ReactNode;
};
declare const CarouselButton: React$1.ForwardRefExoticComponent<CarouselButtonProps & React$1.RefAttributes<HTMLDivElement>>;
type CarouselSelectProps = {
    className?: string;
    children: React$1.ReactNode;
};
declare const CarouselSelect: React$1.ForwardRefExoticComponent<CarouselSelectProps & React$1.RefAttributes<HTMLDivElement>>;
type CarouselDotsProps = React$1.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    classNameDot?: string;
};
declare const CarouselDots: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    classNameDot?: string;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Collapsible: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps$2 {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}
declare const CommandDialog: {
    ({ title, description, children, className, showCloseButton, ...props }: CommandDialogProps): React$1.JSX.Element;
    displayName: string;
};
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type" | "value"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<React$1.HTMLAttributes<HTMLDivElement>, "value" | "heading"> & {
    heading?: React$1.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<HTMLDivElement> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<React$1.HTMLAttributes<HTMLDivElement>, "onSelect" | "value" | "disabled"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

declare const ContextMenu: React$1.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React$1.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: React$1.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
    variant?: "default" | "destructive";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

type ContextMenuTypeProps = {
    label?: React__default.ReactNode;
    title?: React__default.ReactNode;
    icon?: React__default.ReactNode;
    shortcut?: React__default.ReactNode;
    disabled?: boolean;
    variant?: "default" | "destructive";
    separator?: boolean;
    onClick?: () => void;
    action?: () => void;
    child?: ContextMenuTypeProps[];
    sub?: ContextMenuTypeProps[];
};
type ContextMenuCustomProps = {
    className?: string;
    contentClassName?: string;
    asChild?: boolean;
    title?: React__default.ReactNode;
    children?: React__default.ReactNode;
    list?: ContextMenuTypeProps[];
};
declare const RenderContextMenuItem: (list: ContextMenuTypeProps[]) => React__default.JSX.Element;
declare const ContextMenuCustom: React__default.ForwardRefExoticComponent<ContextMenuCustomProps & React__default.RefAttributes<HTMLButtonElement>>;

interface CircularSliderProps {
    className?: string;
    width?: number;
    height?: number;
    value: number;
    maxValue?: number;
    meterColor?: string | {
        colors: string[];
        stops?: number[];
    };
    meterWidth?: number;
    textColor?: string;
    pointerColor?: string;
    pointerRadius?: number;
    onValueChange: (value: number) => void;
    padding?: number;
}
declare const CircularSlider: React__default.FC<CircularSliderProps>;

type Direction = "ltr" | "rtl";
declare function DirectionProvider({ dir, direction, children, }: {
    dir?: Direction;
    direction?: Direction;
    children: React$1.ReactNode;
}): React$1.JSX.Element;
declare function useDirection(localDir?: Direction): Direction;

interface WithFadeFromProps {
    snapPoints: (number | string)[];
    fadeFromIndex: number;
}
interface WithoutFadeFromProps {
    snapPoints?: (number | string)[];
    fadeFromIndex?: never;
}
type DialogProps$1 = {
    activeSnapPoint?: number | string | null;
    setActiveSnapPoint?: (snapPoint: number | string | null) => void;
    children?: React__default.ReactNode;
    open?: boolean;
    closeThreshold?: number;
    noBodyStyles?: boolean;
    onOpenChange?: (open: boolean) => void;
    shouldScaleBackground?: boolean;
    setBackgroundColorOnScale?: boolean;
    scrollLockTimeout?: number;
    fixed?: boolean;
    dismissible?: boolean;
    handleOnly?: boolean;
    onDrag?: (event: React__default.PointerEvent<HTMLDivElement>, percentageDragged: number) => void;
    onRelease?: (event: React__default.PointerEvent<HTMLDivElement>, open: boolean) => void;
    modal?: boolean;
    nested?: boolean;
    onClose?: () => void;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    preventScrollRestoration?: boolean;
    disablePreventScroll?: boolean;
} & (WithFadeFromProps | WithoutFadeFromProps);
declare function Root({ open: openProp, onOpenChange, children, shouldScaleBackground, onDrag: onDragProp, onRelease: onReleaseProp, snapPoints, nested, setBackgroundColorOnScale, closeThreshold, scrollLockTimeout, dismissible, handleOnly, fadeFromIndex, activeSnapPoint: activeSnapPointProp, setActiveSnapPoint: setActiveSnapPointProp, fixed, modal, onClose, noBodyStyles, direction, preventScrollRestoration, disablePreventScroll, }: DialogProps$1): React__default.JSX.Element;
declare function NestedRoot({ onDrag, onOpenChange, ...rest }: DialogProps$1): React__default.JSX.Element;
declare const Drawer$1: {
    Root: typeof Root;
    NestedRoot: typeof NestedRoot;
    Content: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & {
        onAnimationEnd?: (open: boolean) => void;
    } & React__default.RefAttributes<HTMLDivElement>>;
    Handle: React__default.ForwardRefExoticComponent<Omit<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        preventCycle?: boolean;
    } & React__default.RefAttributes<HTMLDivElement>>;
    Overlay: React__default.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
    Trigger: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React__default.RefAttributes<HTMLButtonElement>>;
    Portal: React__default.FC<DialogPrimitive.DialogPortalProps>;
    Close: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React__default.RefAttributes<HTMLButtonElement>>;
    Title: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
    Description: React__default.ForwardRefExoticComponent<DialogPrimitive.DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
};

declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): React$1.JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DrawerClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerOverlay: React$1.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerContent: React$1.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    onAnimationEnd?: (open: boolean) => void;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

type Number = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type Size = "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full";

type Side = "top" | "bottom" | "left" | "right";

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: {
    ({ ...props }: DialogPrimitive.DialogPortalProps): React$1.JSX.Element;
    displayName: string | undefined;
};
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "default" | "glass" | "destructive" | null;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const dialogContentVariants: (props?: ({
    size?: "default" | "xs" | "sm" | "lg" | "md" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | null | undefined;
    variant?: "default" | "glass" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string;
interface DialogCustom extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface DialogProps extends DialogCustom, React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof dialogContentVariants> {
    size?: Size;
    showCloseButton?: boolean;
}
declare const DialogContent: React$1.ForwardRefExoticComponent<DialogProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, showCloseButton, children, ...props }: React$1.HTMLAttributes<HTMLDivElement> & {
        showCloseButton?: boolean;
    }): React$1.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
    variant?: "default" | "destructive";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

declare function Empty({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const emptyMediaVariants: (props?: ({
    variant?: "default" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;
declare function EmptyMedia({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>): React$1.JSX.Element;
declare function EmptyTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function EmptyDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function EmptyContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const labelVariants: (props?: ClassProp | undefined) => string;
declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare function FieldSet({ className, ...props }: React$1.ComponentProps<"fieldset">): React$1.JSX.Element;
declare function FieldLegend({ className, variant, ...props }: React$1.ComponentProps<"legend"> & {
    variant?: "legend" | "label";
}): React$1.JSX.Element;
declare function FieldGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const fieldVariants: (props?: ({
    orientation?: "vertical" | "horizontal" | "responsive" | null | undefined;
} & ClassProp) | undefined) => string;
declare function Field({ className, orientation, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof fieldVariants>): React$1.JSX.Element;
declare function FieldContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldLabel({ className, ...props }: React$1.ComponentProps<typeof Label>): React$1.JSX.Element;
declare function FieldTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function FieldSeparator({ children, className, ...props }: React$1.ComponentProps<"div"> & {
    children?: React$1.ReactNode;
}): React$1.JSX.Element;
declare function FieldError({ className, children, errors, ...props }: React$1.ComponentProps<"div"> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): React$1.JSX.Element | null;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>({ children, watch, getValues, getErrors, getFieldState, setError, clearErrors, setValue, setValues, trigger, formState, resetField, reset, resetDefaultValues, handleSubmit, unregister, control, register, setFocus, subscribe, }: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React$1.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<HTMLElement> & {
    children?: React$1.ReactNode | undefined;
} & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const HoverCard: React$1.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React$1.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React$1.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface AppIconProps extends Omit<IconProps, "icon"> {
    icon: string;
    size?: number | string;
}
declare function AppIcon({ icon, size, className, ...props }: AppIconProps): React$1.JSX.Element;
declare namespace AppIcon {
    var displayName: string;
}

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare function InputGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-end" | "inline-start" | "block-end" | "block-start" | null | undefined;
} & ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React$1.JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & ClassProp) | undefined) => string;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React$1.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>): React$1.JSX.Element;
declare function InputGroupText({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function InputGroupInput({ className, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare const InputOTP: React$1.ForwardRefExoticComponent<(Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "nonce" | "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
    nonce?: string;
} & {
    render: (props: input_otp.RenderProps) => React$1.ReactNode;
    children?: never;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "nonce" | "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
    nonce?: string;
} & {
    render?: never;
    children: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>, "ref">) & React$1.RefAttributes<HTMLInputElement>>;
declare const InputOTPGroup: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const InputOTPSlot: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    index: number;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const InputOTPSeparator: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare function ItemGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare const itemVariants: (props?: ({
    variant?: "muted" | "default" | "outline" | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;
declare function Item({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare const itemMediaVariants: (props?: ({
    variant?: "image" | "default" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;
declare function ItemMedia({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>): React$1.JSX.Element;
declare function ItemContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function ItemActions({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ItemFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Kbd({ className, ...props }: React$1.ComponentProps<"kbd">): React$1.JSX.Element;
declare function KbdGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const markerVariants: (props?: ({
    variant?: "line" | "default" | "badge" | null | undefined;
} & ClassProp) | undefined) => string;
declare function Marker({ className, variant, asChild, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof markerVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function MarkerIcon({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MarkerContent({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function MenubarMenu({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Menu>): React$1.JSX.Element;
declare function MenubarGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Group>): React$1.JSX.Element;
declare function MenubarPortal({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Portal>): React$1.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.RadioGroup>): React$1.JSX.Element;
declare function MenubarSub({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Sub>): React$1.JSX.Element;
declare const Menubar: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const MenubarSubTrigger: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarSubContent: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarContent: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
    variant?: "default" | "destructive";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarCheckboxItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarRadioItem: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarLabel: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarSeparator: React$1.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;
    displayName: string;
};

type MenuProps = {
    className?: string;
    children?: React__default.ReactNode;
};
declare const Menu: React__default.ForwardRefExoticComponent<MenuProps & React__default.RefAttributes<HTMLUListElement>>;

type MenuButtonProps = {
    active?: boolean;
    children?: (onOpenChange: () => void, open: boolean) => React__default.ReactNode;
};
declare const MenuButton: React__default.ForwardRefExoticComponent<MenuButtonProps & React__default.RefAttributes<HTMLLIElement>>;

interface MenuItemProps extends Omit<React__default.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix"> {
    className?: string;
    icon?: React__default.ReactElement;
    active?: boolean;
    disabled?: boolean;
    prefix?: React__default.ReactNode;
    suffix?: React__default.ReactNode;
    component?: React__default.ReactElement;
    children?: React__default.ReactNode;
}
declare const MenuItem: React__default.ForwardRefExoticComponent<MenuItemProps & React__default.RefAttributes<HTMLAnchorElement>>;

interface SubMenuProps extends Omit<React__default.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix"> {
    className?: string;
    label: string | React__default.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    icon?: React__default.ReactNode;
    active?: boolean;
    disabled?: boolean;
    prefix?: React__default.ReactNode;
    suffix?: React__default.ReactNode;
    component?: string | React__default.ReactNode;
    children?: React__default.ReactNode;
}
declare const SubMenu: React__default.ForwardRefExoticComponent<SubMenuProps & React__default.RefAttributes<HTMLAnchorElement>>;

type SidebarProps = {
    className?: string;
    defaultCollapsed?: boolean;
    collapsed?: boolean;
    collapsedWidth?: number;
    onToggle?: (arg: boolean) => void;
    brandName?: string;
    logo?: React__default.ReactNode;
    homePath?: string;
    breakPoint?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "all";
    children?: React__default.ReactNode;
};
declare const Sidebar$1: React__default.ForwardRefExoticComponent<SidebarProps & React__default.RefAttributes<HTMLElement>>;

declare function MessageGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function Message({ className, align, ...props }: React$1.ComponentProps<"div"> & {
    align?: "start" | "end";
}): React$1.JSX.Element;
declare function MessageAvatar({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function MessageContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function MessageHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function MessageFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

interface MultiSelectOption {
    value: string;
    label: string;
    description?: string;
}
interface MultiSelectProps {
    options: MultiSelectOption[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    disabled?: boolean;
    className?: string;
}
declare function MultiSelect({ options, selected, onChange, placeholder, searchPlaceholder, emptyText, disabled, className, }: MultiSelectProps): React$1.JSX.Element;

type NativeSelectProps = Omit<React$1.ComponentProps<"select">, "size"> & {
    size?: "sm" | "default";
};
declare function NativeSelect({ className, size, ...props }: NativeSelectProps): React$1.JSX.Element;
declare function NativeSelectOption({ ...props }: React$1.ComponentProps<"option">): React$1.JSX.Element;
declare function NativeSelectOptGroup({ className, ...props }: React$1.ComponentProps<"optgroup">): React$1.JSX.Element;

declare const NavigationMenu: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React$1.RefAttributes<HTMLElement>, "ref"> & {
    viewport?: boolean;
} & React$1.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React$1.RefAttributes<HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuItemProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuLinkProps & React$1.RefAttributes<HTMLAnchorElement>, "ref"> & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Pagination: {
    ({ className, ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React$1.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): React$1.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): React$1.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): React$1.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
    displayName: string;
};

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React$1.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare function PopoverHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function PopoverTitle({ className, ...props }: React$1.ComponentProps<"h2">): React$1.JSX.Element;
declare function PopoverDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;

interface ProgressProps extends React$1.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, VariantProps<typeof colorVariants> {
    color?: Color;
}
declare const Progress: React$1.ForwardRefExoticComponent<ProgressProps & React$1.RefAttributes<HTMLDivElement>>;

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface ComboboxOption {
    value: string;
    label: string;
    sublabel?: string;
}
interface SearchableComboboxProps {
    options: ComboboxOption[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    allowClear?: boolean;
    clearLabel?: string;
    disabled?: boolean;
    className?: string;
}
declare function SearchableCombobox({ options, value, onValueChange, placeholder, searchPlaceholder, emptyText, allowClear, clearLabel, disabled, className, }: SearchableComboboxProps): React$1.JSX.Element;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    size?: "sm" | "default";
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Sheet: React$1.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: {
    ({ ...props }: DialogPrimitive.DialogPortalProps): React$1.JSX.Element;
    displayName: string | undefined;
};
declare const SheetOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "md" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | null | undefined;
} & ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
    showCloseButton?: boolean;
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

interface SheetCustomProps {
    className?: string;
    open: boolean;
    title?: string;
    size?: Size;
    side?: Side;
    description?: string;
    children?: React__default.ReactNode;
    cancel: () => void;
}
declare const SheetCustom: React__default.FC<SheetCustomProps>;

declare const TooltipProvider: {
    ({ delayDuration, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Provider>): React$1.JSX.Element;
    displayName: string | undefined;
};
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipArrow: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipArrowProps & React$1.RefAttributes<SVGSVGElement>>;
declare const TooltipPortal: React$1.FC<TooltipPrimitive.TooltipPortalProps>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare const SidebarProvider: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const Sidebar: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarTrigger: React$1.ForwardRefExoticComponent<Omit<ButtonProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarRail: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarInset: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarInput: React$1.ForwardRefExoticComponent<Omit<InputProps & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const SidebarHeader: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarSeparator: React$1.ForwardRefExoticComponent<Omit<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupLabel: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupAction: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarGroupContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenu: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
declare const SidebarMenuButton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuAction: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    showOnHover?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SidebarMenuBadge: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSkeleton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    showIcon?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SidebarMenuSub: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const SidebarMenuSubItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const SidebarMenuSubButton: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLAnchorElement> & React$1.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLAnchorElement>>;

declare function Skeleton({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
declare namespace Skeleton {
    var displayName: string;
}

declare const Slider: React$1.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare function Spinner({ className, ...props }: Omit<React$1.ComponentProps<typeof Icon>, "icon">): React$1.JSX.Element;

interface DualSliderProps extends React$1.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, VariantProps<typeof colorVariants> {
    color?: Color;
}
declare const DualSlider: React$1.ForwardRefExoticComponent<DualSliderProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const Switch: React$1.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    size?: "sm" | "default";
} & React$1.RefAttributes<HTMLButtonElement>>;

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const tabsListVariants: (props?: ({
    variant?: "line" | "default" | null | undefined;
} & ClassProp) | undefined) => string;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: ({
    variant?: "line" | "default" | null | undefined;
} & ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const ToastProvider: React$1.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React$1.RefAttributes<HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const toastVariants: (props?: ({
    variant?: "default" | "outline" | "destructive" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light" | null | undefined;
} & ClassProp) | undefined) => string;
interface ToartInterface {
}
interface ToastCustomProps extends Omit<ToartInterface, "color">, VariantProps<typeof toastVariants> {
    variant?: "default" | "outline" | "destructive";
    color?: "default" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light";
}
declare const Toast$1: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React$1.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | "destructive" | null | undefined;
    color?: "default" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "primary-light" | "secondary-light" | "success-light" | "info-light" | "warning-light" | "danger-light" | null | undefined;
} & ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type ToastProps = React$1.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React$1.ReactElement<typeof ToastAction>;

declare const Toaster$1: {
    (): React$1.JSX.Element;
    displayName: string;
};

type ToasterProps = React$1.ComponentProps<typeof Toaster$2>;
declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
declare const Toggle: React$1.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

declare const ToggleGroup: React$1.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React$1.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string>) & React$1.RefAttributes<HTMLDivElement>>;
declare const ToggleGroupItem: React$1.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement>>;

type ToasterToast = ToastProps & {
    id: string;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    status?: string | "success" | "error" | "warning" | "info";
    action?: ToastActionElement;
};
type Toast = Omit<ToasterToast, "id">;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
};

type DropdownItem = {
    label?: string | ReactNode;
    icon?: ReactNode;
    shortcut?: ReactNode;
    path?: string;
    child?: DropdownItem[];
    action?: () => void;
    disabled?: boolean;
    variant?: "default" | "destructive";
    separator?: boolean;
};
interface DropdownMenuProps {
    icon?: ReactNode;
    label?: string | ReactNode;
    title?: string | ReactNode;
    list: DropdownItem[];
    variant?: VariantProps<typeof buttonVariants>["variant"];
    size?: VariantProps<typeof buttonVariants>["size"];
    align?: "start" | "center" | "end";
    className?: string;
    contentClassName?: string;
}
declare const Dropdown: React__default.FC<DropdownMenuProps>;

interface ModalProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    message?: React$1.ReactNode;
    children?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    size?: Size;
    variant?: "default" | "glass" | "destructive";
    showCloseButton?: boolean;
    className?: string;
    action?: () => void;
    cancel?: () => void;
    confirmText?: string;
    cancelText?: string;
}
declare function Modal({ open, onOpenChange, title, description, message, children, footer, size, variant, showCloseButton, className, action, cancel, confirmText, cancelText, }: ModalProps): React$1.JSX.Element;
interface ConfirmModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    onConfirm: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    variant?: "default" | "destructive" | "warning" | "info";
    loading?: boolean;
    isLoading?: boolean;
    icon?: string;
}
declare function ConfirmModal({ open, onOpenChange, title, description, onConfirm, onCancel, confirmText, cancelText, variant, loading, isLoading, icon, }: ConfirmModalProps): React$1.JSX.Element;
declare const ConfirmDialog: typeof ConfirmModal;
type ConfirmDialogProps = ConfirmModalProps;

interface AlertDialogProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: ReactNode;
    description?: ReactNode;
    message?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    size?: Size;
    variant?: "default" | "glass" | "destructive";
    showCloseButton?: boolean;
    className?: string;
    action?: () => void;
    cancel?: () => void;
    confirmText?: string;
    cancelText?: string;
}

interface DialogModalProps extends React__default.ComponentPropsWithoutRef<"div"> {
    className?: string;
    open: boolean;
    title?: string;
    desc?: string;
    size?: Size;
    variant?: "default" | "glass" | "destructive";
    children?: React__default.ReactNode;
    action?: (data?: any) => void;
    cancel: () => void;
    confirmText?: string;
    cancelText?: string;
    draggable?: boolean;
    resizable?: boolean;
    scrollable?: boolean;
    response?: boolean;
    props?: any;
}
declare const DialogModal: React__default.ForwardRefExoticComponent<DialogModalProps & React__default.RefAttributes<HTMLDivElement>>;

type LoaderProps = {
    img?: string;
    className?: string;
    size?: number;
};
declare const Loader: {
    ({ img, className, size }: LoaderProps): React$1.JSX.Element;
    displayName: string;
};

type GridElement = React$1.ElementRef<"div">;
interface GridProps extends React$1.ComponentPropsWithoutRef<"div"> {
    className?: string;
    asChild?: boolean;
    display?: "grid" | "inline-grid" | "hidden" | string;
    col?: Number | number | "none" | "subgrid";
    cols?: Number | number | "none" | "subgrid";
    rows?: Number | number | "none" | "subgrid" | string;
    flow?: "row" | "col" | "dense" | "row-dense" | "col-dense";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
    gap?: Number | number | string;
    gapX?: Number | number | string;
    gapY?: Number | number | string;
    props?: any;
}
declare const Grid: React$1.ForwardRefExoticComponent<GridProps & React$1.RefAttributes<HTMLDivElement>>;

type ColElement = React$1.ElementRef<"div">;
interface ColProps extends React$1.ComponentPropsWithoutRef<"div"> {
    className?: string;
    asChild?: boolean;
    col?: Number | number | "auto" | "full";
    span?: Number | number | "auto" | "full";
    spaceX?: Number | number;
    spaceY?: Number | number;
    start?: Number | number | "auto";
    end?: Number | number | "auto";
    props?: any;
}
declare const Col: React$1.ForwardRefExoticComponent<ColProps & React$1.RefAttributes<HTMLDivElement>>;

type FlexElement = React$1.ElementRef<"div">;
interface FlexProps extends React$1.ComponentPropsWithoutRef<"div"> {
    className?: string;
    asChild?: boolean;
    display?: "flex" | "inline-flex" | "hidden" | "absolute" | "static" | "fixed" | "relative" | "sticky";
    direction?: "row" | "row-reverse" | "col" | "col-reverse";
    align?: "stretch" | "start" | "center" | "end" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    gap?: Number | number | string;
    props?: any;
}
declare const Flex: React$1.ForwardRefExoticComponent<FlexProps & React$1.RefAttributes<HTMLDivElement>>;

type OptionSelect = {
    disabled?: boolean;
    label?: string;
    sublabel?: string;
    value?: string | number | boolean;
};
interface ComboBoxProps extends Omit<React$1.ButtonHTMLAttributes<HTMLButtonElement>, "value" | "onChange" | "title"> {
    title?: string | React$1.ReactNode;
    options?: OptionSelect[] | any;
    value?: string | number | boolean;
    filter?: ((value: string, search: string) => number) | undefined;
    onChange?: (value: any) => void;
    response?: boolean;
    allowDeselect?: boolean;
}
declare const ComboBox: React$1.ForwardRefExoticComponent<ComboBoxProps & React$1.RefAttributes<HTMLButtonElement>>;

type OptionMultiSelect = {
    value?: number | string;
    label?: string;
    disabled?: boolean;
};
interface MultipleSelectProps extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
    options?: OptionMultiSelect[];
    value?: (string | number | boolean)[];
    placeholder?: string;
    tags?: boolean;
    filter?: ((value: string, search: string) => number) | undefined;
    onChange?: (value: (string | number | boolean)[]) => void;
    response?: boolean;
}
declare const MultipleSelect: React__default.ForwardRefExoticComponent<MultipleSelectProps & React__default.RefAttributes<HTMLButtonElement>>;

interface InputFormProps extends React__default.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    className?: string;
    itemClassName?: string;
    control?: any;
    label?: ReactNode;
    name?: any;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    description?: ReactNode;
    placeholder?: string;
    type?: string;
    props?: any;
    component?: React__default.ReactElement;
    clickIcon?: () => void;
}
declare const InputForm: React__default.ForwardRefExoticComponent<InputFormProps & React__default.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;

interface DateTimePickerProps {
    value?: Date;
    onChange: (date: Date) => void;
    className?: string;
}
declare const DateTimePicker: {
    ({ value, onChange, className, }: DateTimePickerProps): React$1.JSX.Element;
    displayName: string;
};

interface DatePickerRangeProps {
    className?: string;
    onChange: (date: DateRange) => void;
}
declare const DatePickerRange: React__default.FC<DatePickerRangeProps>;

interface DatePickerProps {
    value?: Date;
    onChange: (date?: Date) => void;
    placeholder?: string;
    className?: string;
}
declare const DatePicker: {
    ({ value, onChange, placeholder, className, }: DatePickerProps): React$1.JSX.Element;
    displayName: string;
};

interface Hour {
    number: string;
    translatedValue: string;
    selected?: boolean;
    arrayNumber?: number;
}
interface HourFormatProps {
    height: number;
    setHourFormat: (format: any) => void;
    hourFormat: any;
}
declare const HourFormat: React__default.FC<HourFormatProps>;

interface Hours {
    number: string;
    translatedValue: string;
    selected: boolean;
    hidden?: boolean;
}
interface HourWheelProps {
    height: number;
    value: string;
    setValue: (value: any) => void;
    use12Hours?: boolean;
}
declare const HourWheel: React__default.FC<HourWheelProps>;

interface Minute {
    number: string;
    translatedValue: string;
    selected: boolean;
}
interface MinuteWheelProps {
    height: number;
    value: string;
    setValue: (value: any) => void;
}
declare const MinuteWheel: React__default.FC<MinuteWheelProps>;

interface TimePickerSelectionProps {
    pickerDefaultValue?: string;
    initialValue: string;
    height?: number;
    onSave?: (value: string) => void;
    onCancel?: () => void;
    cancelButtonText?: string;
    saveButtonText?: string;
    controllers?: boolean;
    setInputValue: (value: string | null) => void;
    setIsOpen: (isOpen: boolean) => void;
    seperator?: boolean;
    use12Hours?: boolean;
    onAmPmChange?: (value: string) => void;
}
declare const TimePickerSelection: React__default.FC<TimePickerSelectionProps>;

interface TimePickerProps extends Omit<TimePickerSelectionProps, "setInputValue" | "setIsOpen" | "initialValue" | "onFinish"> {
    className?: string;
    value?: string | null;
    height?: number;
    cellHeight?: number;
    placeHolder?: string;
    pickerDefaultValue?: string;
    onChange?: (value: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSave?: () => void;
    onCancel?: () => void;
    disabled?: boolean;
    open?: boolean;
    required?: boolean;
    cancelButtonText?: string;
    saveButtonText?: string;
    controllers?: boolean;
    seperator?: boolean;
    id?: string | null;
    use12Hours?: boolean;
    onAmPmChange?: () => void;
    name?: string | null;
    onOpen?: () => void;
    inputClassName?: string | null;
}
declare const TimePicker: React__default.FC<TimePickerProps>;

type Action = {
    label: string;
    color?: Color;
    icon?: React$1.ReactElement;
    action?: (payload?: any) => void;
};
type SettingPaginate = {
    start: number;
    end: number;
    step: number;
};
interface DataTableLabels {
    searchPlaceholder?: string;
    noResults?: string;
    rowsSelected?: (selected: number, total: number) => string;
    rowsPerPage?: string;
    pageInfo?: (page: number, totalPages: number) => string;
    columns?: string;
    toggleColumns?: string;
    stickyLastColumn?: string;
    resizeMode?: string;
}
interface DataTableProps<TData = any, TValue = any> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    totalRows?: number;
    pagination?: PaginationState;
    onPaginationChange?: OnChangeFn<PaginationState>;
    sorting?: SortingState;
    onSortingChange?: OnChangeFn<SortingState>;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchColumn?: string;
    enableRowSelection?: boolean;
    rowSelection?: RowSelectionState;
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    getRowId?: (row: TData) => string;
    enableColumnVisibility?: boolean;
    enableColumnResizing?: boolean;
    stickyLastColumn?: boolean;
    enableStickyToggle?: boolean;
    toolbarActions?: React$1.ReactNode;
    filterSlot?: React$1.ReactNode;
    bulkActions?: (selectedRows: TData[]) => React$1.ReactNode;
    loading?: boolean;
    isLoading?: boolean;
    pageSizeOptions?: number[];
    labels?: DataTableLabels;
    emptyIcon?: React$1.ReactNode;
    onRowClick?: (row: TData) => void;
    className?: string;
    search?: string;
    hidden?: string[];
    pageCount?: number;
    manualPagination?: boolean;
    onPagination?: (arg: PaginationState) => void;
    paginationSetting?: SettingPaginate;
    onSelectRow?: (selectedRows: TData[]) => void;
    actions?: Action[];
    scrollable?: boolean;
    headerClass?: string;
    bodyClass?: string;
}
type DataTablePropsBase = DataTableProps<any, any>;
type DataTableWithPagination = DataTableProps<any, any> & {
    manualPagination: true;
    pageCount?: number;
    onPagination: (arg: PaginationState) => void;
};
type DataTableWithoutPagination = DataTableProps<any, any> & {
    manualPagination?: false;
};
declare const usePagination: () => {
    limit: number;
    onPaginateChange: React$1.Dispatch<React$1.SetStateAction<PaginationState>>;
    pagination: PaginationState;
    skip: number;
};
declare const useSkipper: () => readonly [boolean, () => void];
declare const Filter: ({ column, table, }: {
    column: Column<any, any>;
    table: Table$1<any>;
}) => React$1.JSX.Element;
declare function createSelectionColumn<TData>(): ColumnDef<TData, unknown>;
declare function DataTableColumnHeader({ title, column, className, }: {
    title: string;
    column: {
        getCanSort: () => boolean;
        getIsSorted: () => false | "asc" | "desc";
        toggleSorting: (desc?: boolean) => void;
    };
    className?: string;
}): React$1.JSX.Element;
declare function DataTable<TData = any, TValue = any>({ columns, data, totalRows, pagination: controlledPagination, onPaginationChange, sorting: controlledSorting, onSortingChange, searchValue, onSearchChange, searchColumn, enableRowSelection, rowSelection: controlledRowSelection, onRowSelectionChange, getRowId, enableColumnVisibility, enableColumnResizing, stickyLastColumn, enableStickyToggle, toolbarActions, filterSlot, bulkActions, loading, isLoading, pageSizeOptions, labels: userLabels, emptyIcon, onRowClick, className, search, hidden, pageCount: legacyPageCount, manualPagination, onPagination, paginationSetting, onSelectRow, actions, scrollable, headerClass, bodyClass, }: DataTableProps<TData, TValue>): React$1.JSX.Element;
declare const ModernDataTable: typeof DataTable;

declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => React$1.JSX.Element;
declare const ResizablePanel: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<HTMLDivElement | HTMLElement | HTMLObjectElement | HTMLAnchorElement | HTMLButtonElement | HTMLFormElement | HTMLHeadingElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLIElement | HTMLOListElement | HTMLParagraphElement | HTMLSelectElement | HTMLSpanElement | HTMLUListElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLLegendElement | HTMLLinkElement | HTMLMapElement | HTMLMetaElement | HTMLMeterElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLPreElement | HTMLProgressElement | HTMLSlotElement | HTMLScriptElement | HTMLSourceElement | HTMLStyleElement | HTMLTableElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLVideoElement | HTMLTableCaptionElement | HTMLMenuElement | HTMLPictureElement>, "id" | "onResize"> & {
    className?: string | undefined;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: ResizablePrimitive.PanelOnCollapse | undefined;
    onExpand?: ResizablePrimitive.PanelOnExpand | undefined;
    onResize?: ResizablePrimitive.PanelOnResize | undefined;
    order?: number | undefined;
    style?: object | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: React$1.ReactNode;
} & React$1.RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => React$1.JSX.Element;

interface StepContextType {
    currentStepIndex: number;
    setCurrentStepIndex: (index: number) => void;
    totalSteps: number;
    setTotalSteps: (total: number) => void;
    completedSteps: boolean[];
    setCompletedSteps: (steps: boolean[]) => void;
    setStepCompleted: (stepIndex: number) => void;
}
declare const StepperContext: React__default.Context<StepContextType | undefined>;
interface StepContainerProps {
    defaultIndex?: number;
    className?: string;
    children: React__default.ReactNode;
    onIndexChange?: (index: number) => void;
    autoNextStep?: boolean;
}
interface StepContainerRef {
    setStepCompleted: (stepIndex: number) => void;
}
declare const StepContainer: React__default.ForwardRefExoticComponent<StepContainerProps & React__default.RefAttributes<StepContainerRef>>;
type StepListProps = {
    className?: string;
    children: React__default.ReactNode;
};
declare const StepList: React__default.ForwardRefExoticComponent<StepListProps & React__default.RefAttributes<HTMLDivElement>>;
interface StepTriggerProps {
    index: number;
    icon?: React__default.ReactNode;
    children?: React__default.ReactNode;
    disabled?: boolean;
}
declare const StepTrigger: React__default.ForwardRefExoticComponent<StepTriggerProps & React__default.RefAttributes<HTMLDivElement>>;
type StepProgressProps = {
    className?: string;
    color?: Color;
};
declare const StepProgress: React__default.FC<StepProgressProps>;
type StepperChildProps = {
    isActive?: boolean;
};
type StepperProps = {
    className?: string;
    children: React__default.ReactElement<StepperChildProps> | React__default.ReactElement<StepperChildProps>[];
};
declare const Stepper: React__default.ForwardRefExoticComponent<StepperProps & React__default.RefAttributes<HTMLDivElement>>;
interface StepsContentProps {
    className?: string;
    isActive?: boolean;
    children: React__default.ReactNode;
}
declare const StepsContent: React__default.ForwardRefExoticComponent<StepsContentProps & React__default.RefAttributes<HTMLDivElement>>;
type StepNavProps = {
    className?: string;
    children: React__default.ReactNode;
};
declare const StepNav: React__default.ForwardRefExoticComponent<StepNavProps & React__default.RefAttributes<HTMLDivElement>>;
type StepNavButtonProps = {
    className?: string;
    children: React__default.ReactNode;
    disabled?: boolean;
    labelFinish?: string;
};
declare const StepPrevious: React__default.ForwardRefExoticComponent<StepNavButtonProps & React__default.RefAttributes<HTMLButtonElement>>;
declare const StepNext: React__default.ForwardRefExoticComponent<StepNavButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, type Action, Alert, AlertAction, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, type AlertDialogProps, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AppIcon, type AppIconProps, AspectRatio, Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle, AttachmentTrigger, Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Badge, type BadgeCustom, type BadgeProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Bubble, BubbleContent, BubbleGroup, BubbleReactions, BulkActionsBar, type BulkActionsBarProps, Button, ButtonGroup, type ButtonGroupProps, ButtonGroupSeparator, ButtonGroupText, type ButtonProps, Calendar, type CalendarProps, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselButton, type CarouselButtonProps, CarouselContent, CarouselControl, type CarouselControlProps, CarouselDots, type CarouselDotsProps, CarouselItem, CarouselNext, type CarouselNextProps, CarouselPrevious, CarouselSelect, type CarouselSelectProps, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, CircularSlider, type CircularSliderProps, Col, type ColElement, type ColProps, Collapsible, CollapsibleContent, CollapsibleTrigger, type Color, ComboBox, type ComboBoxProps, type ComboboxOption, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ConfirmDialog, type ConfirmDialogProps, ConfirmModal, type ConfirmModalProps, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuCustom, type ContextMenuCustomProps, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, type ContextMenuTypeProps, DataTable, DataTableColumnHeader, type DataTableLabels, type DataTableProps, type DataTablePropsBase, type DataTableWithPagination, type DataTableWithoutPagination, DatePicker, type DatePickerProps, DatePickerRange, type DatePickerRangeProps, DateTimePicker, type DateTimePickerProps, Dialog, DialogClose, DialogContent, type DialogCustom, DialogDescription, DialogFooter, DialogHeader, DialogModal, type DialogModalProps, DialogOverlay, DialogPortal, type DialogProps, DialogTitle, DialogTrigger, type Direction, DirectionProvider, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, Dropdown, type DropdownItem, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, type DropdownMenuProps, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DualSlider, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Filter, Flex, type FlexElement, type FlexProps, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Grid, type GridElement, type GridProps, type Hour, HourFormat, type HourFormatProps, HourWheel, type HourWheelProps, type Hours, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputForm, type InputFormProps, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, type InputProps, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, Loader, type LoaderProps, Marker, MarkerContent, MarkerIcon, Menu, MenuButton, type MenuButtonProps, MenuItem, type MenuItemProps, type MenuProps, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader, type Minute, MinuteWheel, type MinuteWheelProps, Modal, type ModalProps, ModernDataTable, MultiSelect, type MultiSelectOption, type MultiSelectProps, MultipleSelect, type MultipleSelectProps, NativeSelect, NativeSelectOptGroup, NativeSelectOption, type NativeSelectProps, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, type Number, type OptionMultiSelect, type OptionSelect, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger, Progress, type ProgressProps, RadioGroup, RadioGroupItem, RenderContextMenuItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, SearchableCombobox, type SearchableComboboxProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, type SettingPaginate, ButtonGroup as ShadcnButtonGroup, Sidebar as ShadcnSidebar, Sheet, SheetClose, SheetContent, SheetCustom, type SheetCustomProps, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, type Side, Sidebar$1 as Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, type SidebarProps, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, type Size, Skeleton, Slider, Spinner, StepContainer, type StepContainerProps, type StepContainerRef, type StepContextType, StepList, type StepListProps, StepNav, type StepNavButtonProps, type StepNavProps, StepNext, StepPrevious, StepProgress, type StepProgressProps, StepTrigger, type StepTriggerProps, Stepper, type StepperChildProps, StepperContext, StepsContent, type StepsContentProps, SubMenu, type SubMenuProps, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, TimePicker, type TimePickerProps, TimePickerSelection, type TimePickerSelectionProps, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, type ToastCustomProps, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster$1 as Toaster, Toaster as ToasterSonner, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger, type VariantProps, alertVariants, attachmentMediaVariants, attachmentVariants, badgeVariants, bubbleContentVariants, bubbleReactionsVariants, bubbleVariants, buttonGroupVariants, buttonVariants, cn, colorVariants, createSelectionColumn, cva, dialogContentVariants, emptyMediaVariants, fieldVariants, generateArray, inputGroupAddonVariants, inputGroupButtonVariants, itemMediaVariants, itemVariants, labelVariants, markerVariants, navigationMenuTriggerStyle, sheetVariants, sidebarMenuButtonVariants, tabsListVariants, toast, toastVariants, toggleVariants, useCarousel, useDebounce, useDelay, useDirection, useFormField, useForwardedRef, useIsMobile, useMediaQuery, usePagination, useRepeat, useSidebar, useSkipper, useToast };
