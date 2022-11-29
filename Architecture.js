/** Architecture
        * Fabric
        * Render,commit, and mount
        * Cross-platform implementation
        * View flattening 
        * Threading Model
        * Bundle and tools
            Bundled hermes
        * Glossary
 */

import { View } from "react-native";

/** Fabric
        React-native's new rendering system
        Evolution of legacy rendering sys
        unifies C++ 
        improve interoperability with host platforms
        unlocks new capabilities 
        New facebook app bacekd by it

        Motivations & Benefits:
            Renders react surfaces synchronously, avoids layout jump issues.
            Prioritised interactions
            Integration with react suspense - more intuitive way of data fetching 
            Enable react concurrent features
            Easier to implement server side rendering for react-native.

        Benefits:
            Type safety:
            shared C++ core:
            Better host platform intereoperability
            Improved performance.
            Consistancy: crossplatform 
            Faster-startup
            Less seerialization of data b/w JS and Host platforms 
 */

/** Render, Commit & Mount
    
    * The React Native renderer goes through a sequence of work to render React logic to a host platform.  

    Render: React exe product logic and create React-Element-Tree in JS, from this tree , 
            the renderer create a React-Shadow Tree in C++
    Commit: After React-Element-Tree is fully created, the renderer triggers Commit, this promotes both tree as 
            next-tree to be mounted, this also schedules the calc of its layout info
    Mount:  React showdoe tree now with results of calculation of its layouts, transformed into HOST VIEW TREE
        
    Image : 2022-11-29-15-33-46.png
 */

// Initial render

function myComponent() {
    return (
        <View>
            <Text>Hello, world</Text>
        </View>
    );
}
//<MyComponent />

/** Cross-platform implemetation 
 * Leveraging C++ as core rendering system.
 * Memory footprint is small
 * 
 * Image: 2022-11-29-19-14-01.png
 */

/** View flatenning 
        It's an optimization by react native reneder to avaoid deep layout trees.
        Reduces the depth of host views.
        This algo takes into condideration prop like padding, margin, backgroundColor and opacity
        We dont use extra CPU
        Implemented in C++ 
 */

/** Bundled hermes 
        Lightweight JS engine designed to optimise react nativev on Android
        Improves performance and also expose ways to analyse the performance that it runs.
        User can enable and disable hermes engine.
 */

/** Glossory
 *      Fabric Renderer
            React Native executes the same React framework code as React for the web. 
            However, React Native renders to general platform views (host views) instead of DOM nodes 
            (which can be considered web’s host views). Rendering to host views is made possible by 
            the Fabric Renderer. Fabric lets React talk to each platform and manage its host view instances.
            The Fabric Renderer exists in JavaScript and targets interfaces made available by C++ code. 
            Read more about React renderers in this blog post.

        Host platform
            The platform embedding React Native (e.g., Android, iOS, macOS, Windows)

        Host View Tree (and Host View)
            Tree representation of views in the host platform (e.g. Android, iOS). On Android, 
            the host views are instances of android.view.ViewGroup, android.widget.TextView, etc. 
            which are the building blocks of the host view tree. 
            The size and location of each host view are based on LayoutMetrics calculated with Yoga, 
            and the style and content of each host view are based on information from the React Shadow Tree.

        JavaScript Interfaces (JSI)
            A lightweight API to embed a JavaScript engine in a C++ application. 
            Fabric uses it to communicate between Fabric’s C++ core and React.

        Java Native Interface (JNI)
            An API for to write Java native methods used to communicate between Fabric’s C++ core 
            and Android, written in Java.

        React Component
            A JavaScript function or class that instructs how to create a React Element. 

        React Composite Components
            React Components with render implementations that reduce to other React Composite Components or
            React Host Components.

        React Host Components or Host Components
            React Components whose view implementation is provided by a host view (e.g., <View>, <Text> ).
            On the Web, ReactDOM's Host components would be components like <p> and <div>.

        React Element Tree (and React Element)
            A React Element Tree is created by React in JavaScript and consists of React Elements. 
            A React Element is a plain JavaScript object that describes what should appear on the screen. 
            It includes props, styles, and children. React Elements only exist in JavaScript and can 
            represent instantiations of either React Composite Components or React Host Components. 

        React Shadow Tree (and React Shadow Node)
            A React Shadow Tree is created by the Fabric Renderer and consists of React Shadow Nodes. 
            A React Shadow Node is an object that represents a React Host Component to be mounted, 
            and contains props that originate from JavaScript. 
            They also contain layout information (x, y, width, height). 
            In Fabric, React Shadow Node objects exist in C++. 
            Before Fabric, these existed in the mobile runtime heap (e.g. Android JVM).

        Yoga Tree (and Yoga Node)
            The Yoga Tree is used by Yoga to calculate layout information for a React Shadow Tree. 
            Each React Shadow Node typically creates a Yoga Node because React Native employs Yoga to calculate layout.
            However, this is not a hard requirement. Fabric can also create React Shadow Nodes that do not use Yoga; 
            the implementation of each React Shadow Node determines how to calculate layout.
 */